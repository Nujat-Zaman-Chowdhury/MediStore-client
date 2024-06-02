import SalesReportRow from "../../../components/TableRow/SalesReportRow";


const SalesReport = () => {
    return (
        <div>
            <h2>Sales Report</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
            <th>Medicine Name</th>
            <th>Seller Email</th>
            <th>Buyer Email</th>
            <th>Total Price</th>
            <th>Created At</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <SalesReportRow/>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default SalesReport;