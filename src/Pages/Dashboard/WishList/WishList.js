import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const WishList = () => {
    const [wishList, setWishList] = useState([]);
    const { brandName, model, resellPrice, description } = wishList;

    useEffect(() => {
        fetch('http://localhost:5000/wishlist')
            .then(res => res.json())
            .then(data => setWishList(data))
    }, [])

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });

    const handeDeleteWishList = (id) => {
        fetch(`http://localhost:5000/wishlist/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast('WishList deleted successfully');
                    refetch();
                }
            })
    }

    return (
        <div>
            <h2 className='text-2xl flex flex-start'>My Orders</h2>
            <div className="overflow-x-auto mt-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Brand Name</th>
                            <th>Model</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wishList?.length &&
                            wishList?.map((wish, index) => <tr key={wish._id}>
                                <th>{index + 1}</th>
                                <td>{wish.brandName}</td>
                                <td>{wish.model}</td>
                                <td>{wish.description.slice(0, 20)}...</td>
                                <td>{wish.resellPrice}</td>
                                <td>
                                    {
                                        wish.resellPrice && !wish.paid && <Link to="">
                                            <button onClick={() => handeDeleteWishList(wish._id)} className="btn btn-outline btn-primary">Delete</button>
                                        </Link>
                                    }
                                    {
                                        wish.resellPrice && wish.paid && <button className="btn btn-outline btn-success">Pending</button>
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

export default WishList;