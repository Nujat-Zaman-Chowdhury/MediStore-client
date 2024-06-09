import { Helmet } from "react-helmet-async";
import PaymentManagementRow from "../../../components/TableRow/PaymentManagementRow";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../Shared/LoadingSpinner";

const PaymentManagement = () => {
  const axiosSecure = useAxiosSecure();

  //get all payments data 
  const {data : allPayments = [],isLoading,refetch} = useQuery({
    queryKey:['allPayments'],
    queryFn:async()=>{
      const {data} = await axiosSecure('/payments')
      return data;
    }
  })
  console.log(allPayments);

  if(isLoading) return <LoadingSpinner></LoadingSpinner>
  return (
    <div className="overflow-x-auto">
      <Helmet>
                <title>Payment Management | Dashboard</title>
      </Helmet>
      <div>
        <h1 className="md:text-3xl font-bold font-outfit my-3">Total Payments : <span className="text-blue-400">{allPayments.length}</span></h1>
      </div>
      <table className="table mt-5 border">
        {/* head */}
        <thead className="bg-blue-400 text-white uppercase font-outfit">
          <tr>
            <th>Payment ID</th>
            <th>User Email</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            allPayments.map(payment=><PaymentManagementRow key={payment._id} payment={payment} refetch={refetch}/>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default PaymentManagement;
