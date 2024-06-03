import { IoStatsChartSharp } from "react-icons/io5";
import MenuItem from "./MenuItem";
import { MdPayments } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { BsFillFileEarmarkMedicalFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";

const AdminMenu = () => {
  return (
    <>
      {/* manage users */}
      <MenuItem
        label="Manage Users"
        address="manage-users"
        icon={FaUsers}
      ></MenuItem>

      {/* manage category */}
      <MenuItem
        label="Manage Category"
        address="manage-category"
        icon={BsFillFileEarmarkMedicalFill}
      ></MenuItem>

      {/*payment management */}

      <MenuItem
        label="Payment management"
        address="payment-management"
        icon={MdPayments}
      ></MenuItem>

      {/* sales report */}
      <MenuItem
        label="Sales Report"
        address="sales-report"
        icon={IoStatsChartSharp}
      ></MenuItem>

      {/* manage banner advertise */}

      <MenuItem
        label="Manage banner Advertise"
        address="manage-banner"
        icon={AiFillSetting}
      ></MenuItem>
    </>
  );
};

export default AdminMenu;
