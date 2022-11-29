import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllBuyers = () => {
    const [buyers, setBuyers] = useState([]);
    useEffect(() => {
        axios.get(` https://b612-used-products-resale-server-side-smahaduzzaman.vercel.app/users/buyers`)
            .then(res => setBuyers(res.data))
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
                            buyers?.map((buyer, index) => <tr key={buyer._id}>
                                <th>{index + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td>{buyer.phone}</td>
                                <td>
                                    <td>
                                        {
                                            buyer?.role === 'buyer' && <p><span className="badge badge-warning">Pending</span></p>
                                        }
                                        
                                        {
                                            buyer?.role !== 'buyer' && <p><span className="badge badge-success">Verified</span></p>
                                        }
                                    </td>
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