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
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import WishList from "../../Pages/Dashboard/WishList/WishList";
import Cars from "../../Pages/Home/Cars/Cars";
import Home from "../../Pages/Home/Home/Home";
import ViewAllCars from "../../Pages/Home/ViewAllButton/ViewAllCars";
import Login from "../../Pages/Login/Login";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PriveateRoute/PrivateRoute";

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
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/cars/:id',
                element: <Cars></Cars>,
                loader: ({ params }) => fetch(`http://localhost:5000/cars/${params.id}`)
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
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        // element: <DashboardLayout></DashboardLayout>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
            },
            {
                path: '/dashboard/allbuyers',
                element: <AllBuyers></AllBuyers>
                // element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>,
            },
            {
                path: '/dashboard/allsellers',
                element: <AllSellers></AllSellers>
                // element: <AdminRoute><AllSellers></AllSellers></AdminRoute>,
            },
            {
                path: '/dashboard/allcars',
                element: <AllCars></AllCars>
                // element: <AdminRoute><AllSellers></AllSellers></AdminRoute>,
            },
            {
                path: '/dashboard/addcar',
                element: <AddCar></AddCar>
                // element: <AdminRoute><AddCar></AddCar></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/orders/${params.id}`)
            },
            {
                path: '/dashboard/wishlist',
                element: <WishList></WishList>
            }
        ]
    }
])

export default router;