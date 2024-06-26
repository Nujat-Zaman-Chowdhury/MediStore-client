import { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import { MdRemoveShoppingCart } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { Button } from "@headlessui/react";
import toast from "react-hot-toast";

const CartPage = () => {
  const [cart, refetch, isLoading] = useCart();
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();

  const { user } = useAuth();


  const handleIncrease = (id) => {
    const updatedCart = cart.map((item) => {
      if (item._id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    updateCart(id, updatedCart.find(item => item._id === id).quantity);
  };
  const handleDecrease = (id) => {
    const updatedCart = cart.map((item) => {
      if (item._id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    updateCart(id, updatedCart.find(item => item._id === id).quantity);
  };
  
  const updateCart = async (id,quantity) => {
    try {
      // setLoading(true);
      await axiosSecure.put(`carts/${id}`,{quantity} );
      refetch();
    } catch (err) {
      console.log(err.message);
    } finally {
      // setLoading(false);
    }
  };

  const totalPrice = cart.reduce((total,item)=> total + item.pricePerUnit * item.quantity,0)



 

  //delete one medicine
  const { mutateAsync: deleteMedicine } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosSecure.delete(`/cart/${id}`);
      return data;
    },
  });

  const handleRemove = async (id) => {
    try {
      // console.log(id);
      await deleteMedicine(id);
      toast.success('Removed')
      refetch();
    } catch (err) {
      console.log(err.message);
    }
  };
  //clear all on medicine
  const { mutateAsync: clearAll } = useMutation({
    mutationFn: async () => {
      const { data } = await axiosSecure.delete(`/carts?email=${user?.email}`);
      return data;
    },
  });

  const handleClearAll = async () => {
    try {
      await clearAll();
      refetch();
    } catch (err) {
      console.log(err.message);
    }
  };




  if (isLoading || loading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <>
      {cart.length > 0 ? (
        <div className="container mx-auto">
          <div className="my-10 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold font-outfit">
                Your Cart Items
              </h1>
              <p className="font-poppins font-medium mt-3">
                Total Amount: 
                <span className="text-blue-400 ml-2">${totalPrice}</span>
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <Link to="/checkout">
                <Button
                            
                className="btn flex bg-blue-400 text-white hover:bg-white hover:text-blue-400 hover:border-blue-400">
                  Checkout <MdOutlineShoppingCartCheckout />
                </Button>
              </Link>

              <button
                onClick={handleClearAll}
                className="btn bg-red-600 text-white hover:bg-red-500 hover:text-white flex"
              >
                Clear All <MdRemoveShoppingCart />
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="table border">
              {/* head */}
              <thead className="bg-blue-400 text-white font-outfit">
                <tr>
                  <th className="text-center">Name</th>
                  <th className="text-center">Company Name</th>
                  <th className="text-center">Price Per Unit</th>
                  <th className="text-center">Quantity</th>
                  <th className="text-center">Actions</th> {/* New column for actions */}
                </tr>
              </thead>
              <tbody>
                {cart.map((medicine) => (
                  <tr className="font-poppins" key={medicine?._id}>
                    <td className="text-center">{medicine?.name}</td>
                    <td className="text-center">{medicine?.company}</td>
                    <td className="text-center">{medicine?.pricePerUnit}</td>
                    <td className="text-center">
                      <button
                      disabled={medicine.quantity===1}
                       onClick={()=>handleDecrease(medicine._id)}
                        className="bg-blue-300 text-white px-3 rounded text-lg font-bold m-2 disabled:cursor-not-allowed"
                      >
                        -
                      </button>
                      {medicine.quantity}
                      <button
                        onClick={()=>handleIncrease(medicine._id)}
                        className="bg-blue-300 text-white px-3 rounded text-lg font-bold m-2"
                      >
                        +
                      </button>
                    </td>
                    <td className="text-center">
                      <button
                        onClick={() => handleRemove(medicine._id)}
                        className="btn bg-red-500 text-white   font-poppins"
                      >
                        Remove <MdDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <>
          <div className="text-3xl font-bold text-center flex justify-center items-center text-blue-400 h-[100vh]">
            <h1>Your cart is empty!!!</h1>
          </div>
        </>
      )}
    </>
  );
};

export default CartPage;
