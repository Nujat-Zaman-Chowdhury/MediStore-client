import { FaEye } from "react-icons/fa6";


const ShopPageRow = ({medicine}) => {
    return (
        <>
          {/* row 1 */}
        <tr className="bg-base-200">
        <td>{medicine.name}</td>
        {/* <td>{medicine.genericName}</td> */}
        <td>{medicine.description}</td>
        <td>{medicine.category}</td>
        {/* <td>{medicine.company}</td>
        <td>{medicine.unitMass}</td> */}
        <td>${medicine.pricePerUnit}</td>
        {/* <td>{medicine.discountPercentage}%</td> */}
        <td>
            <div>
            <button>Select</button>
            <button>Eye</button>
            {/*Modal of eye btn */}

            </div>
        </td>
      </tr>  
        </>
    );
};

export default ShopPageRow;


