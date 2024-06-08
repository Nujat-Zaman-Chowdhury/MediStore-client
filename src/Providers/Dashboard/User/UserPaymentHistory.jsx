import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import LoadingSpinner from "../../../Shared/LoadingSpinner";

const UserPaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/payment/${user?.email}`);
      return data;
    },
  });

  if (loading || isLoading) return <LoadingSpinner />;
  return (
    <div>
      <Helmet>
        <title>Payment History | Dashboard</title>
      </Helmet>
      <div className="text-3xl font-bold font-outfit flex justify-center">
        <h1>Your Purchased History</h1>
      </div>
      <div className="my-6">
        <section className="px-4  text-gray-600 antialiased">
          <div className="flex h-full flex-col justify-center">
            {/* <!-- Table --> */}
            <div className="mx-auto w-full  rounded-sm border border-gray-200 bg-white shadow-lg">
              <div className="overflow-x-auto p-3">
                <table className="w-full table-auto">
                  <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-400">
                    <tr>
                      <th></th>
                      <th className="p-2">
                        <div className="text-left font-semibold">
                          Transaction Id
                        </div>
                      </th>
                      <th className="p-2">
                        <div className="text-left font-semibold">
                          Date
                        </div>
                      </th>
                      <th className="p-2">
                        <div className="text-left font-semibold">Status</div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-100 text-sm">
                    {/* <!-- record 1 --> */}
                    {payments.map((payment, index) => (
                      <tr key={payment._id}>
                        <td>{index + 1}</td>
                        <td className="p-2">
                          <div className="font-medium text-gray-800">
                            {payment.transactionId}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="font-medium text-gray-800">
                            {new Date(payment?.date).toLocaleDateString()}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className={`text-left font-medium ${payment?.status === 'pending'? 'text-red-500' : 'text-blue-500'}`}>
                            {payment.status}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserPaymentHistory;
