import { Helmet } from "react-helmet-async";
import ShopPageRow from "../../components/TableRow/ShopPageRow";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import EyeButtonModal from "../../components/Modal/EyeButtonModal";

const ShopPage = () => {
  const axiosCommon = useAxiosCommon();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMedicine,setSelectedMedicine] = useState(null)
  const closeModal = () => {
    setIsOpen(false);
    setSelectedMedicine(null)
  };

  const {
    data: medicines = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["medicines"],
    queryFn: async () => {
      const { data } = await axiosCommon("/medicines");
      return data;
    },
  });

  return (
    <div>
      <Helmet>
        <title>Shop Page | MediStore</title>
      </Helmet>
      <div className="flex justify-center items-center my-5">
        <h2 className="text-2xl font-outfit font-bold">All Medicines</h2>
      </div>
      <div className="overflow-x-auto container mx-auto">
        <table className="table border">
          {/* head */}
          <thead className="bg-blue-400 text-white font-outfit text-center text-lg ">
            <tr className="font-outfit uppercase">
              <th>Medicine Name</th>
              <th>Category</th>
              <th>Company</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center font-poppins">
            {medicines.map((medicine) => (
              <ShopPageRow
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                setSelectedMedicine={setSelectedMedicine}
                closeModal={closeModal}
                key={medicine._id}
                medicine={medicine}
                isLoading={isLoading}
                selectedMedicine={selectedMedicine}
              />
            ))}
          </tbody>
        </table>
      </div>
      {/*Modal of eye btn */}
      <EyeButtonModal isOpen={isOpen} closeModal={closeModal} medicine={selectedMedicine}></EyeButtonModal>
    </div>
  );
};

export default ShopPage;
