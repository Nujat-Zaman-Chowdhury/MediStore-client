import useAxiosSecure from "../../hooks/useAxiosSecure";


const UserDataRow = ({user,index}) => {
  const axiosSecure = useAxiosSecure()
  
  const handleRoleChange=(role)=>{
    console.log(role);

  }
    return (
        <>
            
      <tr>
        <th>
          {index+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={user.profilePicture} />
              </div>
            </div>
          </div>
        </td>
        <td>
            {/* name */}
          {user.name}
         
        </td>
        <td>
            {/*Email */}
            {user.email}
        </td>
        <td>
            {/*role */}
            {user.role}
        </td>
        <td>
        <select
        onChange={(e)=>handleRoleChange(e.target.value)} 
        defaultValue="default"
        className="select select-info max-w-xs">
            <option disabled value="default">Change Role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="Seller">Seller</option>
        </select>
        </td>
        
      </tr>
        </>
    );
};

export default UserDataRow;