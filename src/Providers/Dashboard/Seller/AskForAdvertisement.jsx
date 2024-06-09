import { Helmet } from "react-helmet-async";
import AdvertisementRow from "../../../components/TableRow/AdvertisementRow";
import AdvertisementModal from "../../../components/Modal/AdvertisementModal";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import LoadingSpinner from "../../../Shared/LoadingSpinner";

const AskForAdvertisement = () => {
  const axiosSecure = useAxiosSecure();

  const { user, loading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  console.log(user);
  //get seller advertisement details
  const { data: advertisements = [], isLoading,refetch } = useQuery({
    queryKey: ["advertisements", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/advertisements/${user?.email}`);
      return data;
    },
  });

  console.log(advertisements);

  if(isLoading) return <LoadingSpinner/>
  return (
    <div>
      <Helmet>
        <title>Ask For Advertisement | Dashboard</title>
      </Helmet>
      <div className="flex justify-between items-center my-5">
        <h2 className="text-lg backdrop:md:text-2xl font-outfit font-bold">Manage Medicine Page</h2>
        <button
          onClick={() => setIsOpen(true)}
          className="btn bg-blue-500 text-white hover:text-blue-400 hover:bg-white hover:border-blue-400 font-poppins"
        >
          Add Advertisement
        </button>
        {/* add category modal */}
        <AdvertisementModal
        refetch={refetch}
          isOpen={isOpen}
          closeModal={closeModal}
          setIsOpen={setIsOpen}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="table border">
          {/* head */}
          <thead className="bg-blue-400 text-white font-outfit">
            <tr>
              <th>Medicine Image</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {advertisements.map((advertisement) => (
              <AdvertisementRow
                key={advertisement._id}
                advertisement={advertisement}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AskForAdvertisement;
