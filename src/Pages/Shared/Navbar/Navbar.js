import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('User logged out');
                toast('User logged out', {
                    type: 'success'
                })
            })
            .catch(err => {
                console.log(err);
                toast(err.message, {
                    type: 'error'
                })
            })
    }


    const listItems = <>
        <li><Link to="/blogs">FAQ's</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
    </>

    return (
        <div className="navbar bg-base-300 px-10 py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li tabIndex={2}>
                            <Link to="/" className="justify-between">
                                Explore
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </Link>
                            <ul className="p-2">
                                {listItems}
                            </ul>
                        </li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl lg:text-3xl"><span className='text-indigo-600 mr-2'>Xclusive</span> Cars</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to="/">Home</Link></li>
                    <li tabIndex={3}>
                        <Link to="/">
                            Explore
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>
                        <ul className="p-2">
                            {listItems}
                        </ul>
                    </li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </div>
            <div className="navbar-end flex flex-col lg:flex-row pl-16">
                {
                    user?.uid ?
                        <>
                            <Link to="/dashboard" className="btn btn-ghost normal-case">Dashboard</Link>
                            <button onClick={handleLogOut} className="btn btn-ghost normal-case">Logout</button>
                        </>
                        :
                        <>
                            <Link to="/login" className="btn btn-ghost normal-case">Login</Link>
                            <Link to="/signup" className="btn btn-ghost normal-case">Sign Up</Link>
                        </>

                }
                <Link to="/"><input type="checkbox" className="toggle toggle-primary hidden lg:block" /></Link>
            </div>
        </div>
    );
};

export default Navbar;