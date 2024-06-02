

const SalesReportRow = () => {
    return (
        <>
        <tr>
        <td>report.medicineId.name</td>
        <td>report.sellerId.email</td>
        <td>report.buyerId.email</td>
        <td>report.totalPrice</td>
        <td>createdAt</td>
      </tr> 
        </>
    );
};

export default SalesReportRow;