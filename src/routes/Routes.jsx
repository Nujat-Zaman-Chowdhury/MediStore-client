import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import DashboardLayout from "../layouts/DashboardLayout";
import ManageUsers from "../Providers/Dashboard/Admin/ManageUsers";
import ManageCategory from "../Providers/Dashboard/Admin/ManageCategory";
import PaymentManagement from "../Providers/Dashboard/Admin/PaymentManagement";
import SalesReport from "../Providers/Dashboard/Admin/SalesReport";
import ManageBannerAdvertise from "../Providers/Dashboard/Admin/ManageBannerAdvertise";
import AdminHomePage from "../Providers/Dashboard/Admin/AdminHomePage";
import DashboardHome from "../Providers/Dashboard/Common/DashboardHome";
import ManageMedicines from "../Providers/Dashboard/Seller/ManageMedicines";

export const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<ErrorPage></ErrorPage>,
        element:<Main></Main>,
        children:[{
            path:'/',
            element:<Home></Home>
        }]
    },
    {path:'/login', element:<Login/>},
    {path:'/sign-up', element:<SignUp/>},

    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            //admin routes
            {
            index:true,
            element:<DashboardHome></DashboardHome>
            },
            {
            path:"manage-users",
            element:<ManageUsers></ManageUsers>
            },
            {
            path:"manage-category",
            element:<ManageCategory></ManageCategory>
            },
            {
            path:"payment-management",
            element:<PaymentManagement></PaymentManagement>
            },
            {
            path:"sales-report",
            element:<SalesReport></SalesReport>
            },
    
            {
            path:"manage-banner",
            element:<ManageBannerAdvertise></ManageBannerAdvertise>
            },


            //seller related routes
            {
                path:"manage-medicines",
                element:<ManageMedicines    ></ManageMedicines>
            },
    
    
    ]
        
    }
])