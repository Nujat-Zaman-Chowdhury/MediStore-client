import { IoMdEye } from "react-icons/io";
import { FcCheckmark } from "react-icons/fc";
import EyeButtonModal from "../Modal/EyeButtonModal";

const ShopPageRow = ({medicine,setIsOpen,setSelectedMedicine,selectedMedicine}) => {

  const handleEyeClick = () => {
    setSelectedMedicine(medicine);
    setIsOpen(true);
  };
    return (
        <>
          {/* row 1 */}
        <tr className="bg-white">
        <td>{medicine?.name}</td>
        <td>{medicine?.category}</td>
        <td>{medicine?.company}</td>
        <td>${medicine?.pricePerUnit}</td>
        <td>
            <div className="flex justify-center gap-3">
            <button className="btn bg-white border-green-400 text-green-400  font-outfit shadow">Select<FcCheckmark className="text-lg" /></button>
            <button onClick={handleEyeClick} className="btn bg-blue-400 text-white text-lg shadow"><IoMdEye /></button>
            
            </div>
        </td>
      </tr>  
        </>
    );
};

export default ShopPageRow;


