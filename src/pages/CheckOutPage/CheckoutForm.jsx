import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce(
    (total, item) => total + item.pricePerUnit * item.quantity,
    0
  );
  console.log(totalPrice);

  useEffect(() => {
    if(totalPrice>0){
        axiosSecure.post("/create-payment-intent", { price: totalPrice })
      .then((res) => {
        // console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {

    event.preventDefault();

    if (!stripe || !elements) {

      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error:", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }


    //confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error", confirmError);
    } else {
      console.log("PaymentIntent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        console.log("transaction id:", paymentIntent.id);

        //now save the payment in db
        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(),
          cartIds: cart.map((item) => item._id),
          medicineItemIds: cart.map((item) => item.medicineId),
          status: "pending",
        };
        console.log(payment);
        const res = await axiosSecure.post("/payments", payment);
        console.log("Payment save", res.data);
        refetch();
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank you payment successful",
            showConfirmButton: false,
            timer: 1500,
          });
            navigate('/dashboard/user-payment-history')
        }
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        className="max-w-3xl mx-auto border p-5 border-blue-400"
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="flex justify-center">
        <button
        disabled={!stripe || !clientSecret}
          className="btn bg-blue-400 text-white my-3 w-20 mx-auto"
          type="submit"
        >
          Pay
        </button>
        <div className="mt-3 flex flex-col justify-center">
        <p className="text-red-600 my-3">{error}</p>
        {
        transactionId && <p className="text-green-600">Your transaction id: {transactionId}</p>
      }
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
