import { useState } from "react";
import ManageCategoryRow from "../../../components/TableRow/ManageCategoryRow";
import AddCategoryModal from "../../../components/Modal/AddCategoryModal";
import { Helmet } from "react-helmet-async";


const ManageCategory = () => {
    const [isOpen,setIsOpen] = useState(false)
    const closeModal = ()=>{
        setIsOpen(false)
    }
    return (
        <div>
          <Helmet>
                <title>Manage Category | Dashboard</title>
            </Helmet>
            <div className="flex justify-between items-center my-5">
            <h2 className="text-2xl font-outfit font-bold">Manage Category Page</h2>
            <button
            onClick={()=>setIsOpen(true)}
            className="btn bg-blue-500 text-white hover:text-blue-400 hover:bg-white hover:border-blue-400 font-poppins">Add Category</button>
            {/* add category modal */}
            <AddCategoryModal isOpen={isOpen} closeModal={closeModal} setIsOpen={setIsOpen}/>
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
      <ManageCategoryRow/>
    </tbody>

    
  </table>
</div>
        </div>
    );
};

export default ManageCategory;