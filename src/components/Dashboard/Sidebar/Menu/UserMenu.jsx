import { GoChecklist } from "react-icons/go";
import MenuItem from "./MenuItem";


const UserMenu = () => {
    return (
        <>
           <MenuItem label="Payment History" address="user-payment-history" icon={GoChecklist}></MenuItem> 
        </>
    );
};

export default UserMenu;