import { Helmet } from "react-helmet-async";
import BannerAdvertiseRow from "../../../components/TableRow/BannerAdvertiseRow";


const ManageBannerAdvertise = () => {
    return (
        <div>
            <Helmet>
                <title>Manage Banner Advertisement | Dashboard</title>
            </Helmet>
            <h2 className="text-2xl">Manage Banner Advertise</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
      <th>Image</th>
    <th>Medicine Name</th>
    <th>Description</th>
    <th>Seller Email</th>
    <th>Advertise</th>
      </tr>
    </thead>
    <tbody>
      <BannerAdvertiseRow/>

    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageBannerAdvertise;