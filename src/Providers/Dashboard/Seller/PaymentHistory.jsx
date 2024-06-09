import { Helmet } from "react-helmet-async";
import PaymentHistoryRow from "../../../components/TableRow/PaymentHistoryRow";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import LoadingSpinner from "../../../Shared/LoadingSpinner";

const PaymentHistory = () => {
  // const [payments, setPayments] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  const { data: sellerPayments = [], isLoading } = useQuery({
    queryKey: ["sellerPayments", user?.email],
    enabled: !!user,
    queryFn: async () => {
      if (user) {
        const { data } = await axiosSecure(`/payments/sellers/${user?.email}`);
        return data;
      }
    },
  });


  if (loading || isLoading) return <LoadingSpinner />;
  return (
    <div>
      <Helmet>
        <title>Payment History | Dashboard</title>
      </Helmet>
      <h2 className="text-lg md:text-2xl font-outfit font-bold">
        Payment History
      </h2>
      <div className="overflow-x-auto mt-6 md:mt-10">
        <table className="table border border-blue-400">
          {/* head */}
          <thead className="bg-blue-400 font-outfit text-white uppercase">
            <tr>
              <th>Purchased Date</th>
              <th>Buyer Email</th>
              <th>Transaction Id</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {sellerPayments.map((payment) => (
              <PaymentHistoryRow key={payment._id} payment={payment} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
