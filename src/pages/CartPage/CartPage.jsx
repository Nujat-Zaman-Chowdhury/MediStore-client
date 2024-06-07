import { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../../Shared/LoadingSpinner";

const CartPage = () => {
    const [cart, refetch,isLoading] = useCart();
    const [cartItems, setCartItems] = useState([]);
    const [loading,setLoading] = useState(false)
    const axiosSecure= useAxiosSecure();
    const {user} = useAuth()

    useEffect(() => {
        setCartItems(cart);
    }, [cart]);

    const {mutateAsync} = useMutation({
        mutationFn:async({id,quantity})=>{
          const {data} = await axiosSecure.put(`/carts/${id}`,{quantity})
          return data;
        },
      })

    const updatedCartItem = async({id,quantity})=>{
        try{
            
            await mutateAsync({id, quantity})
            
            refetch()
        }
        catch(err){
            console.log(err);
        }
    }





    const handleIncrement = (medicineId) => {
        const updatedCart = cartItems.map((item) =>
            item._id === medicineId
                ? { ...item, quantity: parseInt(item.quantity) + 1 } 
                : item
        );
        setCartItems(updatedCart);

        const updatedItem = updatedCart.find(item=>item._id === medicineId);
        updatedCartItem({id: medicineId, quantity:updatedItem.quantity})

    };

    const handleDecrement = (medicineId) => {
        const updatedCart = cartItems.map((item) =>
            item._id === medicineId && parseInt(item.quantity) > 1
                ? { ...item, quantity: parseInt(item.quantity) - 1 }
                : item
        );
        setCartItems(updatedCart);
        const updatedItem = updatedCart.find(item=>item._id === medicineId);
        updatedCartItem({id: medicineId, quantity:updatedItem.quantity})
    };











    //delete on medicine
    const {mutateAsync: deleteMedicine} = useMutation({
        mutationFn:async(id)=>{
          const {data} = await axiosSecure.delete(`/cart/${id}`)
          return data;
        },
      })

    const handleRemove = async(id)=>{
        try{
            // console.log(id);
            await deleteMedicine(id);
            refetch()
        }
        catch(err){
            console.log(err.message);
        }
    }
    //clear all on medicine
    const {mutateAsync: clearAll} = useMutation({
        mutationFn:async()=>{
            const {data} = await axiosSecure.delete(`/carts?email=${user?.email}`)
          return data;
        },
      })

    const handleClearAll = async()=>{
        try{
            await clearAll();
            refetch();
        }
        catch(err){
            console.log(err.message);
        }
    }

    const calculatePrice = ()=>{
        const totalAmount = cartItems.reduce((total,item)=>{
            return total + (item.pricePerUnit * item.quantity)
        },0)
        return parseFloat(totalAmount);
    }

    

    
    if(isLoading || loading) return <LoadingSpinner></LoadingSpinner>
    return (
       <>
       {
        cart.length > 0?
        <div className="container mx-auto">
            <div className="my-10 flex justify-between items-center">
                <div>
                <h1 className="text-2xl font-bold font-outfit">Your Cart Items</h1>
                <p>Total Amount: ${calculatePrice()}</p>
                </div>
                <button
                onClick={handleClearAll}
                className="btn bg-red-600 text-white hover:bg-red-500 hover:text-white" >
                    Clear All
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Company Name</th>
                            <th>Price Per Unit</th>
                            <th>Quantity</th>
                            <th>Actions</th> {/* New column for actions */}
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((medicine) => (
                            <tr key={medicine._id}>
                                <td>{medicine.name}</td>
                                <td>{medicine.company}</td>
                                <td>{medicine.pricePerUnit}</td>
                                <td>
                                    <button
                                        onClick={() => handleDecrement(medicine._id)}
                                        className="bg-blue-300 text-white px-3 rounded text-lg font-bold m-2"
                                    >
                                        -
                                    </button>
                                    {parseInt(medicine?.quantity)} 
                                    <button
                                        onClick={() => handleIncrement(medicine._id)}
                                        className="bg-blue-300 text-white px-3 rounded text-lg font-bold m-2"
                                    >
                                        +
                                    </button>
                                </td>
                                <td>
                                    <button
                                    onClick={()=>handleRemove(medicine._id)}
                                        
                                        className="bg-red-500 text-white px-3 rounded text-lg font-bold m-2"
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button className="btn" onClick={() => console.log("Navigate to checkout")}>
                Checkout
            </button>
        </div>

        :
        <>
        <div className="text-3xl font-bold text-center flex justify-center items-center text-blue-400 h-[100vh]">
            <h1>Your cart is empty!!!</h1>
         </div>
        </>
       }
       </>
    );
};

export default CartPage;
