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
        <td>{category.category}</td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={category.image}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
          </div>
        </td>
          {/*action */}
        <td>

          <button onClick={()=>{handleDelete(category._id)}} className="btn  text-red-600 text-xl">
            <MdDelete />
          </button>
          
        </td>
        <td>

        <button onClick={()=>{setIsEditModalOpen(true)}}  className="btn  text-red-600 text-xl">
            <MdOutlineSystemUpdateAlt />
          </button>
          <UpdateCategoryModal category={category} isOpen={isEditModalOpen} setIsEditModalOpen={setIsEditModalOpen} refetch={refetch}></UpdateCategoryModal>
        </td>
      </tr>
    </>
  );
};

export default ManageCategoryRow;
