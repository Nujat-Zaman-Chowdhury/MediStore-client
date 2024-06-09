import { Helmet } from "react-helmet-async";
import BannerAdvertiseRow from "../../../components/TableRow/BannerAdvertiseRow";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../Shared/LoadingSpinner";

const ManageBannerAdvertise = () => {
  const axiosSecure = useAxiosSecure();

  //get all advertissemtnt
  const { data: advertisements, isLoading } = useQuery({
    queryKey: ["advertisements"],
    queryFn: async () => {
      const { data } = await axiosSecure("/advertisements");
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner/>;
  return (
    <div>
      <Helmet>
        <title>Manage Banner Advertisement | Dashboard</title>
      </Helmet>
      <h2 className="text-2xl font-poppins font-bold">Manage Banner Advertise</h2>
      <div className="overflow-x-auto mt-10">
        <table className="table border border-blue-400">
          {/* head */}
          <thead className="bg-blue-400 text-white font-poppins">
            <tr>
              <th>Image</th>
              <th>Medicine Name</th>
              <th>Description</th>
              <th>Seller Email</th>
              <th>Advertise</th>
            </tr>
          </thead>
          <tbody>
            {advertisements.map((advertisement) => (
              <BannerAdvertiseRow
                key={advertisement?._id}
                advertisement={advertisement}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBannerAdvertise;
