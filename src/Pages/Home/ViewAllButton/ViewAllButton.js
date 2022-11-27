import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Car from '../Cars/Car';

const ViewAllButton = () => {

    return (
        <div className='dark:bg-gray-800 dark:text-gray-100  mt-[-100px]'>
            <Link to="/viewallcars" className='px-10 py-5 text-white text-lg bg-indigo-500 focus:outline-none hover:bg-indigo-600 rounded'>View All Cars</Link>
        </div>
    );
};

export default ViewAllButton;