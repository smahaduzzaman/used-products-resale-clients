import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllBuyers = () => {
    const [sellers, setSellers] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/users/sellers`)
            .then(res => setSellers(res.data))
    }, [])

    return (
        <div>
            <h2 className='text-2xl flex flex-start'>All Buyers</h2>
            <div className="overflow-x-auto mt-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers?.map((seller, index) => <tr key={seller._id}>
                                <th>{index + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>{seller.phone}</td>
                                <td>
                                    {
                                        seller?.role === 'seller' && <p><span className="badge badge-warning">Pending</span></p>
                                    }

                                    {
                                        seller?.role !== 'seller' && <p><span className="badge badge-success">Verified</span></p>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;