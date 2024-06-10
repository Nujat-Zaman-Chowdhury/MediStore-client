import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import UpdateUserModal from "../Modal/UpdateUserModal";
import toast from "react-hot-toast";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import PropTypes from "prop-types";

const UserDataRow = ({ user, index, refetch }) => {
  const { user: loggedInUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const axiosSecure = useAxiosSecure();

  const { mutateAsync } = useMutation({
    mutationFn: async (role) => {
      const { data } = await axiosSecure.patch(
        `/users/update/${user?.email}`,
        role
      );
    },
    onSuccess: (data) => {
      // refetch();
      // console.log(data);
      toast.success("Role Updated Successfully");
      setIsOpen(false);
    },
  });
  const handleRoleChange = async (selected) => {
    console.log(selected);
    //  Aadmin can't change their role
    if (loggedInUser.email === user?.email) {
      toast.error("Action not allowed");
      return setIsOpen(false);
    }

    const userRole = {
      role: selected,
    };
    try {
      const data = await mutateAsync(userRole);
      // console.log(data);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      setIsOpen(false);
    }
  };

  return (
    <>
      <tr className="font-poppins hover:bg-blue-100">
        <td>{index + 1}</td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={user.profilePicture} />
              </div>
            </div>
          </div>
        </td>
        <td className="text-center">
          {/* name */}
          {user.name}
        </td>
        <td className="text-center">
          {/*Email */}
          {user.email}
        </td>
        <td className="text-center">
          {/*role */}
          {/* {user.role} */}
          <div className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${user?.role === 'Admin'? 'bg-red-100/60': 'bg-emerald-100/60'}  `}>
            <span className={`h-1.5 w-1.5 rounded-full ${user?.role === 'Admin'? 'bg-red-500': 'bg-emerald-500'}`}></span>

            <h2 className={`text-sm font-normal ${user?.role === 'Admin'? 'text-red-500' : 'text-emerald-500'} `}>{user.role}</h2>
          </div>
        </td>
        <td className="">
          <button
            className="flex justify-center mx-auto shadow bg-blue-100 p-2 text-blue-500"
            onClick={() => setIsOpen(true)}
          >
            Update Role
          </button>
          <UpdateUserModal
            isOpen={isOpen}
            closeModal={closeModal}
            handleRoleChange={handleRoleChange}
            setIsOpen={setIsOpen}
            user={user}
          ></UpdateUserModal>
        </td>
      </tr>
    </>
  );
};
UserDataRow.propTypes = {
  user: PropTypes.object,
  index: PropTypes.number,
  refetch: PropTypes.func,
};

export default UserDataRow;
