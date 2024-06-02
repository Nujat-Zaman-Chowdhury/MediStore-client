import AdvertisementRow from "../../../components/TableRow/AdvertisementRow";


const AskForAdvertisement = () => {
    return (
        <div>
            <h2 className="text-2xl">Ask For Advertisement</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Medicine Name</th>
        <th>Description</th>
        <th>Status</th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
 
        <AdvertisementRow/>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AskForAdvertisement;