
import useRole from "../../../hooks/useRole";
import LoadingSpinner from "../../../Shared/LoadingSpinner";
import AdminHomePage from "../Admin/AdminHomePage";
import SellerHomePage from "../Seller/SellerHomePage";


const DashboardHome = () => {
    const [role, isLoading] = useRole();
    if(isLoading)  return <LoadingSpinner/>
    return (
        <>
            {role === 'Admin' && <AdminHomePage/>}
            {role === 'Seller' && <SellerHomePage/>}
            
        </>
    );
};

export default DashboardHome;