import { useState } from "react";
import AddMedicineModal from "../../../components/Modal/AddMedicineModal";
import ManageMedicinesRow from "../../../components/TableRow/ManageMedicinesRow";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const ManageMedicines = () => {
  const {user,loading} = useAuth()
  // console.log(user);
  const axiosSecure = useAxiosSecure()
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  //get medicines
  const {data: medicines=[],isLoading,refetch} = useQuery({
    queryKey:['medicines',user?.email],
    queryFn:async()=>{
     
      const {data} = await axiosSecure.get(`/medicines/${user?.email}`)
      refetch();
      return data;
    } 
  })
  
  if(isLoading) return <p>Loading...</p>
  return (
    <div>
        <Helmet>
                <title>Manage Medicines | Dashboard</title>
        </Helmet>
      <div className="flex justify-between items-center my-5">
        <h2 className="text-2xl font-outfit font-bold">Manage Medicine Page</h2>
        <button
          onClick={() => setIsOpen(true)}
          className="btn bg-blue-500 text-white hover:text-blue-400 hover:bg-white hover:border-blue-400 font-poppins"
        >
          Add Medicine
        </button>
        {/* add category modal */}
        <AddMedicineModal
          isOpen={isOpen}
          closeModal={closeModal}
          setIsOpen={setIsOpen}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Generic Name</th>
              <th>Description</th>
              <th>Category</th>
              {/* <th>Company</th>
              <th>Unit Mass</th> */}
              <th>Price</th>
              {/* <th>Discount</th> */}
            </tr>
          </thead>
          <tbody>
            {medicines.map(medicine=><ManageMedicinesRow key={medicine._id} medicine={medicine} isLoading={isLoading} loading={loading}/>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMedicines;
