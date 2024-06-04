
const AdvertisementRow = ({advertisement}) => {


  
    return (
        <>
      <tr>
        <th>
          <img src={advertisement.image} alt=""  className="w-44"/>
        </th>
        <td className="w-[300px]">{advertisement.description}</td>
        <td className={`${advertisement?.status === 'In Slide'? ' text-blue-400': ' text-red-400' }`}>{advertisement.status}</td>
      </tr>
        </>
    );
};

export default AdvertisementRow;