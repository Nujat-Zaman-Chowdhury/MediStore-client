import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import { FcCheckmark } from "react-icons/fc";
import { IoMdEye } from "react-icons/io";


const CardDetailsRow = ({category,setIsOpen,setSelectedMedicine,selectedMedicine}) => {
  const {user} = useAuth();
  const axiosCommon = useAxiosCommon()
  const navigate = useNavigate();
  const location = useLocation();
  const [,refetch] = useCart();

  //handle eye 
  const handleEyeClick = () => {
    setSelectedMedicine(category);
    setIsOpen(true);
  };

  const handleSelect = (medicine)=>{
    // console.log(medicine);
    if(user && user.email){
      //save item to db
      const {_id, ...medicineInfo} = medicine;
      const cartItem ={
        medicineId: medicine?._id,
        quantity: 1,
        buyer: {
          email: user?.email,
          name:user?.displayName,
          profilePicture: user?.photoURL,
          time: Date.now(),
        },
        ...medicineInfo,
      }
      // console.table(cartItem)
      axiosCommon.post('/carts',cartItem)
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
        <tr>
        <td>{category?.name}</td>
        <td>{category?.category}</td>
        <td>{category?.company}</td>
        <td>{category?.pricePerUnit}</td>
        <td>
          <div className="flex justify-center items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={category?.image}
                />
              </div>
            </div>
          </div>
        </td>
          {/*action */}
          
        <td>
        <div className="flex justify-center gap-3">
            <button
            onClick={()=>{handleSelect(category)}}
            className="btn bg-white border-green-400 text-green-400  font-outfit shadow">Select<FcCheckmark className="text-lg" /></button>
            <button onClick={handleEyeClick} className="btn bg-blue-400 text-white text-lg shadow"><IoMdEye /></button>
            
            </div>
        </td>
        
      </tr> 
        </>
    );
};

export default CardDetailsRow;