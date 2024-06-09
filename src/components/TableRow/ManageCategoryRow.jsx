import { useState } from "react";
import { MdDelete, MdOutlineSystemUpdateAlt } from "react-icons/md";
import UpdateCategoryModal from "../Modal/UpdateCategoryModal";

const ManageCategoryRow = ({category,handleDelete,refetch}) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = ()=>{
    setIsOpen(false)
  }
  const [isEditModalOpen,setIsEditModalOpen] = useState(false)
  return (
    <>
      {/* row 1 */}
      <tr>
        <td>{category?.category}</td>
        <td>
          <div className="">
            <div className="">
              <div className="w-16 h-16">
                <img
                  src={category?.image}
                  className="w-full h-full object-cover object-center"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
          </div>
        </td>
          {/*action */}
        <td>

          <button onClick={()=>{handleDelete(category?._id)}} className="btn bg-white text-red-500 text-xl">
            <MdDelete />
          </button>
          
        </td>
        <td>

        <button onClick={()=>{setIsEditModalOpen(true)}}  className="btn bg-white  text-blue-500 text-xl">
            <MdOutlineSystemUpdateAlt />
          </button>
          <UpdateCategoryModal category={category} isOpen={isEditModalOpen} setIsEditModalOpen={setIsEditModalOpen} refetch={refetch}></UpdateCategoryModal>
        </td>
      </tr>
    </>
  );
};

export default ManageCategoryRow;
