const ManageMedicinesRow = ({medicine,isLoading,loading}) => {
  
  return (
    <>
      {/* row 1 */}
      <tr className="font-poppins">
        <td>{medicine.name}</td>
        <td>{medicine['generic-name']}</td>
        <td>{medicine.description}</td>
        <td>{medicine.category}</td>
        {/* <td>medicine.company</td>
        <td>medicine.unitMass</td> */}
        <td>{medicine.pricePerUnit}</td>
        {/* <td>medicine.discountPercentage</td> */}
      </tr>
    </>
  );
};

export default ManageMedicinesRow;
