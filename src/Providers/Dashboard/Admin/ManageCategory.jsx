import { useState } from "react";
import ManageCategoryRow from "../../../components/TableRow/ManageCategoryRow";
import AddCategoryModal from "../../../components/Modal/AddCategoryModal";
import { Helmet } from "react-helmet-async";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const ManageCategory = () => {
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  //get category from db
  const { data: categories = [],isLoading,refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await axiosSecure("/categories");
      return data;
    },
  });

  //delete category
  //delete
  const {mutateAsync} = useMutation({
    mutationFn:async(id)=>{
        const {data} = await axiosSecure.delete(`/category/${id}`)
        return data;
    },
    onSuccess:(data)=>{
        // console.log(data);
        refetch(); 
        toast.success('Successfully deleted')
    }
  })
  const handleDelete = async(id) => {
    // console.log(id);

    try{
        await mutateAsync(id)
    }
    catch(err){
        console.log(err);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <Helmet>
        <title>Manage Category | Dashboard</title>
      </Helmet>
      <div className="flex justify-between items-center my-5">
        <h2 className="text-2xl font-outfit font-bold">
          Manage Category Page {categories.length}
        </h2>
        <button
          onClick={() => setIsOpen(true)}
          className="btn bg-blue-500 text-white hover:text-blue-400 hover:bg-white hover:border-blue-400 font-poppins"
        >
          Add Category
        </button>
        {/* add category modal */}
        <AddCategoryModal
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
              <th>Category Name</th>
              <th>Image</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <ManageCategoryRow key={category._id} category={category} handleDelete={handleDelete} refetch={refetch} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCategory;
