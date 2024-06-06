import { IoMdEye } from "react-icons/io";
import { FcCheckmark } from "react-icons/fc";
import EyeButtonModal from "../Modal/EyeButtonModal";
import useAuth from "../../hooks/useAuth";
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useCart from "../../hooks/useCart";

const ShopPageRow = ({medicine,setIsOpen,setSelectedMedicine,selectedMedicine}) => {
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure()
  const navigate = useNavigate();
  const location = useLocation();
  const [,refetch] = useCart();

  //handle eye 
  const handleEyeClick = () => {
    setSelectedMedicine(medicine);
    setIsOpen(true);
  };

  //handle select 
  const handleSelect = (medicine)=>{
    // console.log(medicine);
    if(user && user.email){
      //save item to db
      const {_id, ...medicineInfo} = medicine;
      const cartItem ={
        medicineId: medicine?._id,
        buyer: {
          email: user?.email,
          name:user?.displayName,
          profilePicture: user?.photoURL,
          time: Date.now(),
        },
        ...medicineInfo,
      }
      // console.table(cartItem)
      axiosSecure.post('/carts',cartItem)
      .then(res=>{
        if(res.data.insertedId){
          toast.success('Added to your cart')
          refetch();
        }
      });
    
    }
    else{
      Swal.fire({
        title: "You are not Logged in",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login!"
      }).then((result) => {
        if (result.isConfirmed) {
          //send user to login page
          navigate('/login',{state: {from: location}})
        }
      });
    }
   
  }

    return (
        <>
          {/* row 1 */}
        <tr className="bg-white">
        <td>{medicine?.name}</td>
        <td>{medicine?.category}</td>
        <td>{medicine?.company}</td>
        <td>${medicine?.pricePerUnit}</td>
        <td>
            <div className="flex justify-center gap-3">
            <button
            onClick={()=>{handleSelect(medicine)}}
            className="btn bg-white border-green-400 text-green-400  font-outfit shadow">Select<FcCheckmark className="text-lg" /></button>
            <button onClick={handleEyeClick} className="btn bg-blue-400 text-white text-lg shadow"><IoMdEye /></button>
            
            </div>
        </td>
      </tr>  
        </>
    );
};

export default ShopPageRow;


