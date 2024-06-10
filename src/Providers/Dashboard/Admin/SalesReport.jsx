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
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const tableRef = useRef(null);
  const axiosSecure = useAxiosSecure();
  const { data: sales = [], isLoading,refetch } = useQuery({
    queryKey: ["sales",startDate,endDate],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/payments');
      return data;
    },
  });


  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <div>
      <Helmet>
        <title>Sales Report | Dashboard</title>
      </Helmet>
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <div>
          <h2 className="text-lg md:text-3xl font-out font-bold my-2">
            Sales Report
          </h2>
          <p className="font-poppins">
            Total : <span className="text-blue-400 mb-3">{sales.length}</span>
          </p>
        </div>
        <div className="my-4 md:my-0 flex justify-center   border border-blue-400 p-2 rounded">
      <span className="mx-2 text-red-500">from</span>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      <span className="mx-2 text-red-500">to</span>
      <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
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
