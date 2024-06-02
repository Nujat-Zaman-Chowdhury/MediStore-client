const BannerAdvertiseRow = () => {
  return (
    <>
      {/* row 1 */}
      <tr>
        <td>
          <img
            src=""
            alt=""
            style={{ width: "50px" }}
          />
        </td>
        <td>medicine.name</td>
        <td>medicine.description</td>
        <td>medicine.sellerId.email</td>
        <td>
            <button>toggle</button>
        </td>
      </tr>
    </>
  );
};

export default BannerAdvertiseRow;
