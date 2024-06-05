import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { useParams } from "react-router-dom";


const CardDetailsRow = ({category}) => {


    return (
        <>
        <tr>
        <td></td>
        <td>{category.category}</td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={category.image}
                />
              </div>
            </div>
          </div>
        </td>
          {/*action */}
        <td>

          <button className="btn  text-red-600 text-xl">
            Select
          </button>
          
        </td>
        <td>

        <button className="btn  text-red-600 text-xl">
            Eye
        </button>
          
        </td>
      </tr> 
        </>
    );
};

export default CardDetailsRow;