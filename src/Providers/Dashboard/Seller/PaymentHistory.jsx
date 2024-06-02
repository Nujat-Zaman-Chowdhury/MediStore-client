import PaymentHistoryRow from "../../../components/TableRow/PaymentHistoryRow";


const PaymentHistory = () => {
    return (
        <div>
            <h2 className="text-2xl">Payment History</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Medicine Name</th>
        <th>Buyer Email</th>
        <th>Total Price</th>
        <th>Payment Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <PaymentHistoryRow/>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;