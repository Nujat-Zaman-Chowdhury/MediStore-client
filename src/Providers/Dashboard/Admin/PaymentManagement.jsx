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
        <h1>Total Payments : {allPayments.length}</h1>
      </div>
      <table className="table">
        {/* head */}
        <thead>
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
