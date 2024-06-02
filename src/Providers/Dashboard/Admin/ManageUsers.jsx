import { Helmet } from "react-helmet-async";
import UserDataRow from "../../../components/TableRow/UserDataRow";


const ManageUsers = () => {
    return (
        <div className='container mx-auto px-4 sm:px-8'>
        <Helmet>
          <title>Manage Users</title>
        </Helmet>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
            <div className="overflow-x-auto">
                    <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/*User data row theke */}
      <UserDataRow/>
    </tbody>
    {/* foot */}
    
    
  </table>
</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ManageUsers;