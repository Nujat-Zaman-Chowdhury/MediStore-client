

const UserDataRow = () => {
    return (
        <>
            
      <tr>
        <th>
          1
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
            {/* name */}
          Zemlak, Daniel and Leannon
         
        </td>
        <td>
            {/*Email */}
            email
        </td>
        <td>
            {/*role */}
            user
        </td>
        <td>
        <select 
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