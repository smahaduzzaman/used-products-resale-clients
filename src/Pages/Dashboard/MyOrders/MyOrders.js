import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)

    const url = `https://b612-used-products-resale-server-side-smahaduzzaman.vercel.app/orders?email=${user?.email}`

    const { data: orders = [] } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className=''>
            <h2 className='text-2xl flex flex-start'>My Orders</h2>
            <div className="overflow-x-auto mt-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.length &&
                            orders?.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.brandName}</td>
                                <td>{order.model}</td>
                                <td>{order.resellPrice}</td>
                                <td>
                                    {
                                        order.resellPrice && !order.paid && <Link to={`/dashboard/payment/${order._id}`}>
                                            <button className="btn btn-outline btn-primary">Pay Now</button>
                                        </Link>
                                    }
                                    {
                                        order.resellPrice && order.paid && <button className="btn btn-outline btn-success">Paid</button>
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

export default MyOrders;