import { Helmet } from "react-helmet-async";
import SalesReportRow from "../../../components/TableRow/SalesReportRow";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../Shared/LoadingSpinner";
import { useEffect, useRef } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SalesReport = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const tableRef = useRef(null);
  const axiosSecure = useAxiosSecure();
  const { data: sales = [], isLoading,refetch } = useQuery({
    queryKey: ["sales",startDate,endDate],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/payments',{
        
        params: {
          startDate: startDate,
          endDate: endDate,
        },
        }

      
      );
      return data;
    },
    

  },
  

);

useEffect(() => {
  if (startDate && endDate) {
    refetch();
  }
}, [startDate, endDate, refetch]);

  console.log(sales);
  const handleSearch = (e) => {
    e.preventDefault();
    refetch();
};
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <div>
      <Helmet>
        <title>Sales Report | Dashboard</title>
      </Helmet>
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <div>
        <form onSubmit={handleSearch} className="mb-4">
        <div className="flex gap-4 ">
         <div className="flex w-full items-center gap-4">
         <label className="block mb-2 text-sm font-medium">From</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md"
          />
         </div>
          <div className="flex items-center w-full gap-4">
          <label className="block mb-2 text-sm font-medium">To</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md"
          />
          </div>
          <button type="submit">Search</button>
        </div>
      </form>
          <h2 className="text-lg md:text-3xl font-out font-bold my-2">
            Sales Report
          </h2>
          <p className="font-poppins">
            Total : <span className="text-blue-400 mb-3">{sales.length}</span>
          </p>
        </div>


        <DownloadTableExcel
          filename="sales-report table"
          sheet="sales-report"
          currentTableRef={tableRef.current}
        >
          <button className="btn rounded-none bg-white  hover:bg-white hover:border-red-500 hover:text-red-500 hover:underline border border-red-500 text-red-500">
            {" "}
            Export excel{" "}
          </button>
        </DownloadTableExcel>
      </div>
      <div className="overflow-x-auto my-6" ref={tableRef}>
        <table className="table border">
          {/* head */}
          <thead className="bg-blue-400 text-white  font-outfit uppercase">
            <tr>
              <th className="w-1/3">Medicine Name</th>
              <th className="text-center">Seller Email</th>
              <th className="text-center">Buyer Email</th>
              <th className="text-center">Date</th>
              <th className="text-center">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {sales.map((sale, index) => (
              <SalesReportRow sale={sale} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesReport;
