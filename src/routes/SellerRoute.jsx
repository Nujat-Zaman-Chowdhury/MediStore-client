
import { Navigate } from "react-router-dom";
import LoadingSpinner from "../Shared/LoadingSpinner";
import useRole from "../hooks/useRole";
import PropTypes from 'prop-types'
const SellerRoute = ({children}) => {
    const [role,isLoading] = useRole();
    if(isLoading) return <LoadingSpinner/>

    if(role === 'Seller') return children;
    
    return <Navigate to="/dashboard"></Navigate>
};


export default SellerRoute;
SellerRoute.propTypes = {
    children: PropTypes.element,
  }