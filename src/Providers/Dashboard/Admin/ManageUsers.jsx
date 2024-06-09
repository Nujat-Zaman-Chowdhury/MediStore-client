import { Helmet } from "react-helmet-async";
import UserDataRow from "../../../components/TableRow/UserDataRow";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import LoadingSpinner from "../../../Shared/LoadingSpinner";
import { FaUser } from "react-icons/fa6";

const ManageUsers = () => {
  
  const axiosSecure = useAxiosSecure();
  

  //fetch users
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/users");
      console.log(data);
      return data;
    },
  });

  

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <Helmet>
        <title>Manage Users | Dashboard</title>
      </Helmet>
      <div className="py-8">
        <h2 className="text-lg md:text-3xl  font-outfit flex justify-center items-center gap-2"><FaUser /> Total Users: <span className="text-blue-400">{users?.length}</span></h2>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead className="bg-blue-400 text-white uppercase font-outfit">
                  <tr className="">
                    <th></th>
                    <th className="text-center">Image</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Role</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/*User data row theke */}
                  {users.map((user, index) => (
                    <UserDataRow
                    
                      key={user._id}
                      user={user}
                      index={index}
                      refetch={refetch}
                      
                    />
                  ))}
                </tbody>
                {/* foot */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
