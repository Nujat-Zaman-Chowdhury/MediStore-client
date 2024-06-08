

const SalesReportRow = ({sale}) => {

  const medicineNames = sale.items.map(item => item.name).join(', ');

  return (
    <tr className="hover:bg-blue-50">
      <td className="w-1/3">{medicineNames}</td>
      <td className="text-center">{sale?.items.map(item => item.seller.email).join(', ')}</td>
      <td className="text-center">{sale?.buyer.email}</td>
      <td className="text-center">{new Date(sale.date).toLocaleDateString()}</td>
      <td className="text-center">{sale?.price}</td>
    </tr>
  );

};

export default SalesReportRow;