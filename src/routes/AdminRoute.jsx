import { Navigate } from "react-router-dom";
import LoadingSpinner from "../Shared/LoadingSpinner";
import useRole from "../hooks/useRole";
import PropTypes from 'prop-types'

const AdminRoute = ({children}) => {
    const [role,isLoading] = useRole();
    if(isLoading) return <LoadingSpinner/>

    if(role === 'Admin') return children;
    
    return <Navigate to="/dashboard"></Navigate>
};

export default AdminRoute;
AdminRoute.propTypes = {
    children: PropTypes.element,
  }