import { loadStripe } from "@stripe/stripe-js";
import {Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const CheckOut = () => {
   
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl text-center mb-10">Your Payment </h1>
      
      <div className="flex flex-col justify-center">
      <p className="text-center mb-3 font-poppins text-2xl">Confirm Your Payment</p>
        <Elements stripe={stripePromise}>
          <CheckoutForm/>
        </Elements>
      </div>
    </div>
  );
};

export default CheckOut;
