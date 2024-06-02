import { MdDelete, MdOutlineSystemUpdateAlt } from "react-icons/md";

const ManageCategoryRow = () => {
  return (
    <>
      {/* row 1 */}
      <tr>
        <td>categoryname</td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
          </div>
        </td>
          {/*action */}
        <td>

          <button className="btn  text-red-600 text-xl">
            <MdDelete />
          </button>
          
        </td>
        <td>

        <button className="btn  text-red-600 text-xl">
            <MdOutlineSystemUpdateAlt />
          </button>
          
        </td>
      </tr>
    </>
  );
};

export default ManageCategoryRow;