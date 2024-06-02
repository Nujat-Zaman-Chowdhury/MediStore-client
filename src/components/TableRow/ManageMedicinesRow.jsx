const ManageMedicinesRow = () => {
  return (
    <>
      {/* row 1 */}
      <tr className="bg-base-200">
        <td>medicine.name</td>
        <td>medicine.genericName</td>
        <td>medicine.description</td>
        <td>medicine.category</td>
        {/* <td>medicine.company</td>
        <td>medicine.unitMass</td> */}
        <td>medicine.pricePerUnit</td>
        {/* <td>medicine.discountPercentage</td> */}
      </tr>
    </>
  );
};

export default ManageMedicinesRow;
