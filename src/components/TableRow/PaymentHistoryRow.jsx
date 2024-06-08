

const PaymentHistoryRow = ({payment}) => {
    return (
        <>
        <tr>
        <th>{new Date(payment?.date).toLocaleDateString()}</th>
        <td>{payment?.buyer.email}</td>
        <td>{payment?.buyer.email}</td>
        <td>{payment?.transactionId}</td>
        <td className={`${payment.status === 'pending'? 'text-red-500': 'text-blue-500'}`}>{payment?.status}</td>
      </tr> 
        </>
    );
};

export default PaymentHistoryRow;