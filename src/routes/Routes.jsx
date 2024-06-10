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
import DashboardHome from "../Providers/Dashboard/Common/DashboardHome";
import ManageMedicines from "../Providers/Dashboard/Seller/ManageMedicines";
import PaymentHistory from "../Providers/Dashboard/Seller/PaymentHistory";
import AskForAdvertisement from "../Providers/Dashboard/Seller/AskForAdvertisement";
import UserPaymentHistory from "../Providers/Dashboard/User/UserPaymentHistory";
import CategoryCardDetails from "../pages/Home/CategoryCardSection/CategoryCardDetails";
import ShopPage from "../pages/ShopPage/ShopPage";
import CartPage from "../pages/CartPage/CartPage";
import InvoicePage from "../pages/InvoicePage/InvoicePage";
import CheckOut from "../pages/CheckOutPage/CheckOut";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import SellerRoute from "./SellerRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category-details/:category",
        element: <CategoryCardDetails></CategoryCardDetails>,
      },
      {
        path: "/shop-page",
        element: <ShopPage></ShopPage>,
      },
      {
        path: "/cart-page",
        element: <PrivateRoute><CartPage></CartPage></PrivateRoute>,
      },
      {
        path: "/checkout",
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/sign-up", element: <SignUp /> },

  {
    path: "/invoice-page/:transactionId",
    element: <PrivateRoute><InvoicePage></InvoicePage></PrivateRoute>,
  },

  {
    path: "/dashboard",
    element:<PrivateRoute> <DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      //admin routes
      {
        index: true,
        element: <PrivateRoute><DashboardHome></DashboardHome></PrivateRoute>,
      },
      {
        path: "manage-users",
        element: <PrivateRoute><AdminRoute><ManageUsers></ManageUsers></AdminRoute></PrivateRoute>,
      },
      {
        path: "manage-category",
        element: <PrivateRoute><AdminRoute><ManageCategory></ManageCategory></AdminRoute></PrivateRoute>,
      },
      {
        path: "payment-management",
        element: <PrivateRoute><AdminRoute><PaymentManagement></PaymentManagement></AdminRoute></PrivateRoute>,
      },
      {
        path: "sales-report",
        element: <PrivateRoute><AdminRoute><SalesReport></SalesReport></AdminRoute></PrivateRoute>,
      },

      {
        path: "manage-banner",
        element:<PrivateRoute><AdminRoute> <ManageBannerAdvertise></ManageBannerAdvertise></AdminRoute></PrivateRoute>,
      },

      //seller related routes
      {
        path: "manage-medicines",
        element: <PrivateRoute><SellerRoute><ManageMedicines></ManageMedicines></SellerRoute></PrivateRoute>,
      },
      {
        path: "payment-history",
        element:<PrivateRoute><SellerRoute> <PaymentHistory></PaymentHistory></SellerRoute></PrivateRoute>,
      },
      {
        path: "ask-for-advertisement",
        element:<PrivateRoute><SellerRoute> <AskForAdvertisement></AskForAdvertisement></SellerRoute></PrivateRoute>,
      },

      //user related routes
      {
        path: "user-payment-history",
        element: <PrivateRoute><UserPaymentHistory></UserPaymentHistory></PrivateRoute>,
      },
    ],
  },
]);
