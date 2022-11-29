import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import useBuyer from '../hooks/useBuyer';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);

    return (
        <div>
            <Navbar></Navbar>
            <label htmlFor="dashboard-drawer" tabIndex={4} className="btn btn-ghost lg:hidden flex justify-start ml-10 my-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                <span className='ml-2'>Expand List</span>
            </label>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {
                            isBuyer &&
                            <>
                                <li><Link to="/dashboard">My Orders</Link></li>
                                <li><Link to="/dashboard/wishlist">Wishlist</Link></li>
                            </>
                        }

                        {
                            isSeller &&
                            <>
                                <li><Link to="/dashboard/allcars">All Cars</Link></li>
                                <li><Link to="/dashboard/addcar">Add Car</Link></li>
                                <li><Link to="/dashboard/mybuyers">My Buyers</Link></li>
                                <li><Link to="/dashboard/myproducts">My Products</Link></li>
                            </>
                        }

                        {
                            isAdmin &&
                            <>
                                <li><Link to="/dashboard/allusers">All Users</Link></li>
                                <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                                <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                                <li><Link to="/dashboard/reporteditems">Reported Items</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;