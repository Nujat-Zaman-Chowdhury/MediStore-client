
const AdvertisementRow = ({advertisement}) => {


  
    return (
        <>
      <tr>
        <th>
          <img src={advertisement.image} alt=""  className="w-60"/>
        </th>
        <td>{advertisement.description}</td>
        <td>{advertisement.status}</td>
      </tr>
        </>
    );
};

export default AdvertisementRow;