import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category";
import Contacts from "../../Pages/Contacts/Contacts";
import AddCar from "../../Pages/Dashboard/AddCar/AddCar";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllCars from "../../Pages/Dashboard/AllCars/AllCars";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyBuyers from "../../Pages/Dashboard/MyBuyers/MyBuyers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import ReportedItems from "../../Pages/Dashboard/RepotedItems/ReportedItems";
import WishList from "../../Pages/Dashboard/WishList/WishList";
import Cars from "../../Pages/Home/Cars/Cars";
import Home from "../../Pages/Home/Home/Home";
import ViewAllCars from "../../Pages/Home/ViewAllButton/ViewAllCars";
import Login from "../../Pages/Login/Login";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PriveateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                // element: <PrivateRoute><Category></Category></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b612-used-products-resale-server-side-smahaduzzaman.vercel.app/category/${params.id}`)
            },
            {
                path: '/cars/:id',
                element: <Cars></Cars>,
                loader: ({ params }) => fetch(`https://b612-used-products-resale-server-side-smahaduzzaman.vercel.app/cars/${params.id}`)
            },
            {
                path: '/viewallcars',
                element: <ViewAllCars></ViewAllCars>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]

    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        // element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>,
                // element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>,
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/allcars',
                element: <AdminRoute><AllCars></AllCars></AdminRoute>
            },
            {
                path: '/dashboard/addcar',
                element: <AddCar></AddCar>
                // element: <SellerRoute><AddCar></AddCar></SellerRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://b612-used-products-resale-server-side-smahaduzzaman.vercel.app/orders/${params.id}`)
            },
            {
                path: '/dashboard/wishlist',
                element: <WishList></WishList>
                // element: <BuyerRoute><WishList></WishList></BuyerRoute>
            },
            {
                path: '/dashboard/mybuyers',
                element: <MyBuyers></MyBuyers>
                // element: <SellerRoute><MyBuyers></MyBuyers></SellerRoute>
            },
            {
                path: '/dashboard/reporteditems',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
                // element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            }
        ]
    }
])

export default router;