import { Helmet } from "react-helmet-async";
import ShopPageRow from "../../components/TableRow/ShopPageRow";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import EyeButtonModal from "../../components/Modal/EyeButtonModal";
import PaginationButton from "../../Shared/PaginationButton";
import { IoIosSearch } from "react-icons/io";

const ShopPage = () => {
  const axiosCommon = useAxiosCommon();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState(null);

  //pagination
  const [count, setCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPages = Math.ceil(count / itemsPerPage);

  //search
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");

  const closeModal = () => {
    setIsOpen(false);
    setSelectedMedicine(null);
  };

  const {
    data: medicines = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["medicines", currentPage, itemsPerPage, search],
    queryFn: async () => {
      const { data } = await axiosCommon(
        `/medicines?page=${currentPage}&size=${itemsPerPage}&search=${search}`
      );
      return data;
    },
  });

  //pagination
  // get count
  useEffect(() => {
    const getCount = async () => {
      const { data } = await axiosCommon(
        `${import.meta.env.VITE_API_URL}/medicines-count?&search=${search}`,
        { withCredentials: true }
      );
      setCount(data.count);
      // setLoading(false)
    };

    getCount();
  }, [axiosCommon, search]);

  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);

  const handlePaginationButton = (value) => {
    // console.log(value);
    setCurrentPage(value);
    window.scrollTo(0, 0);
  };

  //handleSearch
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
  };

  // const handleReset=()=>{
  //     setSearch('');
  //     setSearchText('')
  //     setFilter('')
  // }
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Shop Page | MediStore</title>
      </Helmet>
      <div className="my-5 flex items-center">
        <h2 className="text-2xl font-outfit font-bold">All Medicines</h2>
        <form onSubmit={handleSearch}>

            <div className="relative border w-52 border-blue-400 ml-4 rounded">
           
              <input
                type="text"
                name="search"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                className="h-14 w-full pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
                placeholder="Search anything..."
              />
               
              <div className="absolute top-4 right-3 flex items-center"><IoIosSearch />
                <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
              </div>
            </div>

        
        </form>
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
      <EyeButtonModal
        isOpen={isOpen}
        closeModal={closeModal}
        medicine={selectedMedicine}
      ></EyeButtonModal>

      {/* pagination */}

      <PaginationButton
        pages={pages}
        currentPage={currentPage}
        handlePaginationButton={handlePaginationButton}
        numberOfPages={numberOfPages}
      />
    </div>
  );
};

export default ShopPage;
