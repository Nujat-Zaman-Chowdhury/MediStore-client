import { Helmet } from "react-helmet-async";
import ShopPageRow from "../../components/TableRow/ShopPageRow";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import EyeButtonModal from "../../components/Modal/EyeButtonModal";

const ShopPage = () => {
  const axiosCommon = useAxiosCommon();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMedicine,setSelectedMedicine] = useState(null)

  //pagination
  const [count,setCount]=useState(0)
    const [itemsPerPage,setItemsPerPage]=useState(5);
    const [currentPage,setCurrentPage]=useState(1);
    const numberOfPages = Math.ceil(count/itemsPerPage);

  const closeModal = () => {
    setIsOpen(false);
    setSelectedMedicine(null)
  };

  const {
    data: medicines = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["medicines",currentPage,itemsPerPage],
    queryFn: async () => {
      const { data } = await axiosCommon(`/medicines?page=${currentPage}&size=${itemsPerPage}`);
      return data;
    },
  });



      //pagination
      // get count
      useEffect(()=>{
        const getCount = async()=>{
            const {data} = await axiosCommon(`${import.meta.env.VITE_API_URL}/medicines-count?`,{withCredentials:true})
            setCount(data.count)
            // setLoading(false)
        }

        getCount();
    },[axiosCommon])



  const pages = [...Array(numberOfPages).keys()].map(element=>element+1)

    const handlePaginationButton = (value)=>{
        // console.log(value);
        setCurrentPage(value);
        window.scrollTo(0, 0);
    }



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
      <div className="my-5">
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

      {/* pagination */}
      <div className="my-12 flex justify-center items-center">
            
            {/* prev button */}
            <button
            disabled={currentPage === 1}
            onClick={()=>handlePaginationButton(currentPage-1)}
            className="px-4 border border-blue-500 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-white rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white">Prev</button>

            {
                pages.map(pageNum=>(
                    <button
                    onClick={()=>handlePaginationButton(pageNum)}
                    className={`hidden ${currentPage === pageNum? 'bg-blue-500 text-white': ''} px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`} 
                    key={{pageNum}}>{pageNum}</button>
                ))
            }

            {/* next button */}
            <button
            disabled={currentPage === numberOfPages}
            onClick={()=>handlePaginationButton(currentPage+1)}
            className="px-4 py-2 border border-blue-500 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-white rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white">next</button>
            </div>

    </div>
  );
};

export default ShopPage;
