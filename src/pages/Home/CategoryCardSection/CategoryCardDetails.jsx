import { Helmet } from "react-helmet-async";
import CardDetailsRow from "../../../components/TableRow/CardDetailsRow";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../Shared/LoadingSpinner";
import { useEffect, useState } from "react";
import EyeButtonModal from "../../../components/Modal/EyeButtonModal";
import PaginationButton from "../../../Shared/PaginationButton";
import { IoIosSearch } from "react-icons/io";

const CategoryCardDetails = () => {
  const axiosCommon = useAxiosCommon();
  const { category } = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState(null);

  //pagination
  const [count, setCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPages = Math.ceil(count / itemsPerPage);

  //search
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");

  //sort
  const [sort, setSort] = useState("");

  const closeModal = () => {
    setIsOpen(false);
    setSelectedMedicine(null);
  };
  // console.log(category);

  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories", currentPage, itemsPerPage, search,sort],
    queryFn: async () => {
      const { data } = await axiosCommon(`/category-details/${category}?page=${currentPage}&size=${itemsPerPage}&search=${search}&sort=${sort}`);
      return data;
    },
  });
  console.log(categories);


  // get count
  useEffect(() => {
    const getCount = async () => {
      const { data } = await axiosCommon(
        `${
          import.meta.env.VITE_API_URL
        }/categories-count/${category}?&search=${search}&sort=${sort}`,
        { withCredentials: true }
      );
      setCount(data.count);
      // setLoading(false)
    };

    getCount();
  }, [axiosCommon, category, search, sort]);

  //pagination
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
    setCurrentPage(1);
  };

  const handleReset = () => {
    setSearch("");
    setSearchText("");
    setSort("");
    setCurrentPage(1);
  };

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  return (
    //   <div className="container mx-auto px-4 sm:px-8 my-10">
    //   <Helmet>
    //     <title>Medicine Details | MediStore</title>
    //   </Helmet>
    //   <div className="py-8">
    //     <h2 className="text-3xl">Total {categories.length} Available</h2>
    //     <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
    //       <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
    //         <div className="overflow-x-auto">
    //           <table className="table">
    //             {/* head */}
    //             <thead>
    //               <tr>
    //                 <th></th>
    //                 <th>Category Name</th>
    //                 <th>Image</th>
    //                 <th>Action</th>
    //               </tr>
    //             </thead>
    //             <tbody>
    //               {
    //                 categories.map(category=><CardDetailsRow key={category._id} category={category}></CardDetailsRow>)
    //               }
    //             </tbody>
    //             {/* foot */}
    //           </table>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container mx-auto">
      <Helmet>
        <title>Shop Page | MediStore</title>
      </Helmet>
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <div className="my-5 flex flex-col md:flex-row items-center">
        <h2 className="text-2xl font-outfit">Total {categories.length} Available</h2>
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

              <div className="absolute top-4 right-3 flex items-center">
                <IoIosSearch />
                <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
              </div>
            </div>
          </form>
        </div>

        {/* sort by price */}
        <div className="space-y-2 flex flex-col-reverse md:flex-row items-center">
          <button
            onClick={handleReset}
            className="btn bg-blue-400 text-white hover:text-blue-400 hover:bg-white hover:border border-blue-400 mr-3 my-2 md:my-0"
          >
            Reset
          </button>
          <select
            onChange={(e) => {
              setSort(e.target.value);
              setCurrentPage(1);
            }}
            value={sort}
            name="sort"
            id="sort"
            className="border p-3 border-blue-400 rounded-md focus:outline-blue-500"
          >
            <option value="">Sort By Price</option>
            <option value="dsc">Descending Order</option>
            <option value="asc">Ascending Order</option>
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
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center font-poppins">
            {categories.map((category) => (
              <CardDetailsRow
                key={category._id}
                category={category}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                setSelectedMedicine={setSelectedMedicine}
                closeModal={closeModal}
                isLoading={isLoading}
                selectedMedicine={selectedMedicine}
              ></CardDetailsRow>
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

export default CategoryCardDetails;
