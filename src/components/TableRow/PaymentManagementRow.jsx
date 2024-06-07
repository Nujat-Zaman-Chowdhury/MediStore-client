import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";


const PaymentManagementRow = ({payment,refetch}) => {
  const axiosSecure = useAxiosSecure();

    const {mutateAsync} = useMutation({
      mutationFn:async({id,status})=>{
       
       
        await axiosSecure.patch(`/payment/${id}`,{status})
      },
      onSuccess:()=>{
        toast.success("Accepted")
        refetch();
      }
    })

    const handleAcceptPayment = (id,currentStatus)=>{
      console.log(typeof currentStatus);
      
      const {data} = mutateAsync({id,status: currentStatus})
      return data;
    }
    return (
        <>
            {/* row 1 */}
          <tr className="">
              <td>{payment?.transactionId}</td>
              <td>{payment?.email}</td>
              <td>{payment?.price}</td>
              <td
              className={`${payment?.status} === 'pending'? text-red-400 : 'text-blue-400'`}
              >{payment?.status}</td>
              <td>
                {payment?.status === 'pending' && (
                  <button className="btn" onClick={() => handleAcceptPayment(payment._id,"paid")}>
                    Accept Payment
                  </button>
                )}


              </td>
          </tr>
        </>
    );
};

export default PaymentManagementRow;