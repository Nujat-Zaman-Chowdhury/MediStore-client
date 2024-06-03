
import { GiMedicines } from "react-icons/gi";
import { RiAdvertisementFill, RiChatHistoryFill } from "react-icons/ri";
import MenuItem from "./MenuItem";

const SellerMenu = () => {
  return (
    <>
      <MenuItem
        label="Manage Medicines"
        address="manage-medicines"
        icon={GiMedicines}
      ></MenuItem>

      <MenuItem
        label="Payment History"
        address="payment-history"
        icon={RiChatHistoryFill}
      ></MenuItem>

      <MenuItem
        label="Ask For Advertisement"
        address="ask-for-advertisement"
        icon={RiAdvertisementFill}
      ></MenuItem>
    </>
  );
};

export default SellerMenu;
