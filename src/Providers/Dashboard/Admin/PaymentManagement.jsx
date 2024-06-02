import PaymentManagementRow from "../../../components/TableRow/PaymentManagementRow";

const PaymentManagement = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User ID</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <PaymentManagementRow/>
        </tbody>
      </table>
    </div>
  );
};

export default PaymentManagement;