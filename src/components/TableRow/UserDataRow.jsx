import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import UpdateUserModal from "../Modal/UpdateUserModal";
import toast from "react-hot-toast";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import PropTypes from 'prop-types'


const UserDataRow = ({user,index,refetch}) => {
  const {user:loggedInUser} = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = ()=>{
    setIsOpen(false)
  }
  const axiosSecure = useAxiosSecure()


  const {mutateAsync} = useMutation({
    mutationFn:async(role)=>{
      const {data} = await axiosSecure.patch(`/users/update/${user?.email}`,role)
    },
    onSuccess:(data)=>{
      refetch();
      // console.log(data);
      toast.success("Role Updated Successfully")
      setIsOpen(false)
    }
  })
  const handleRoleChange = async(selected) => {
    console.log(selected);
    //  Aadmin can't change their role
     if(loggedInUser.email === user.email){
      toast.error("Action not allowed")
      return setIsOpen(false)
    }
    
    const userRole={
      role: selected,
    } 
    try{
      const data = await mutateAsync(userRole)
      console.log(data); 
      
    }
    catch(err){
      console.log(err);
      toast.error(err.message)
      setIsOpen(false)
    }
  };
  

    return (
        <>
            
      <tr>
        <th>
          {index+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={user.profilePicture} />
              </div>
            </div>
          </div>
        </td>
        <td>
            {/* name */}
          {user.name}
         
        </td>
        <td>
            {/*Email */}
            {user.email}
        </td>
        <td>
            {/*role */}
            {user.role}
        </td>
        <td>
        <button onClick={()=>setIsOpen(true)}>Update Role</button>
        <UpdateUserModal isOpen={isOpen} closeModal={closeModal} handleRoleChange={handleRoleChange} setIsOpen={setIsOpen} user={user}></UpdateUserModal>
        </td>
        
      </tr>
        </>
    );
};
UserDataRow.propTypes = {
  user: PropTypes.object,
  index: PropTypes.number,
  refetch: PropTypes.func,
 
}

export default UserDataRow;