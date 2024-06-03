import { Helmet } from "react-helmet-async";
import UserDataRow from "../../../components/TableRow/UserDataRow";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageUsers = () => {
  const axiosSecure = useAxiosSecure()

    const {data: users=[]} = useQuery({
      queryKey:['users'],
      queryFn:async()=>{
        const {data} = await axiosSecure.get('/users');
        console.log(data);
        return data;
      }
    })
    return (
        <div className='container mx-auto px-4 sm:px-8'>
        <Helmet>
          <title>Manage Users | Dashboard</title>
        </Helmet>
        <div className='py-8'>
          <h2 className="text-3xl">Total Users: {users?.length}</h2>
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
     {
      users.map((user,index)=> <UserDataRow key={user._id} user={user} index={index}/>)
     }
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