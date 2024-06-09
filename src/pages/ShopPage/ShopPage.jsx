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

  //sort
  const [sort,setSort] = useState('')

  const closeModal = () => {
    setIsOpen(false);
    setSelectedMedicine(null);
  };

  const {
    data: medicines = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["medicines", currentPage, itemsPerPage, search,sort],
    queryFn: async () => {
      const { data } = await axiosCommon(
        `/medicines?page=${currentPage}&size=${itemsPerPage}&search=${search}&sort=${sort}`
      );
      return data;
    },
  });

  //pagination
  // get count
  useEffect(() => {
    const getCount = async () => {
      const { data } = await axiosCommon(
        `${import.meta.env.VITE_API_URL}/medicines-count?&search=${search}&sort=${sort}`,
        { withCredentials: true }
      );
      setCount(data.count);
      // setLoading(false)
    };

    getCount();
  }, [axiosCommon, search, sort]);

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

  const handleReset=()=>{
      setSearch('');
      setSearchText('');
      setSort('');
      
  }
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Shop Page | MediStore</title>
      </Helmet>
      <div className="flex flex-col md:flex-row md:justify-between items-center">
      <div className="my-5 flex flex-col md:flex-row items-center">
        <h2 className="md:text-2xl font-outfit font-bold">All Medicines</h2>
        <form onSubmit={handleSearch}>

            <div className="relative border w:40 md:w-52 border-blue-400 ml-4 rounded">
           
              <input
                type="text"
                name="search"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                className="h-12 w-full pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
                placeholder="Search anything..."
              />
               
              <div className="absolute top-4 right-3 flex items-center"><IoIosSearch />
                <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
              </div>
            </div>

        
        </form>
      </div>

      {/* sort by price */}
      <div className="space-y-2 flex flex-col-reverse md:flex-row items-center"> 
      <button onClick={handleReset} className='btn bg-blue-400 text-white hover:text-blue-400 hover:bg-white hover:border border-blue-400 mr-3 my-2 md:my-0'>Reset</button>
              <select
                onChange={(e)=>{
                    setSort(e.target.value);
                    setCurrentPage(1);
                }}
                value={sort}
                name='sort'
                id='sort'
                className='border p-3 border-blue-400 rounded-md focus:outline-blue-500'
              >
                <option value=''>Sort By Price</option>
                <option value='dsc'>Descending Order</option>
                <option value='asc'>Ascending Order</option>
              </select>
            </div>
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
