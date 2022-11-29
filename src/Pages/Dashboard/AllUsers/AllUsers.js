import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(' https://b612-used-products-resale-server-side-smahaduzzaman.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });

    const handleMakeAdmin = (id) => {
        fetch(` https://b612-used-products-resale-server-side-smahaduzzaman.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast('Admin added successfully');
                    refetch();
                }
            })
    }

    const handleUserDelete = (id) => {
        fetch(` https://b612-used-products-resale-server-side-smahaduzzaman.vercel.app/users/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast('User deleted successfully');
                    refetch();
                }
            })
    }

    return (
        <div>
            <h2 className='text-2xl flex flex-start'>All Users</h2>
            <div className="overflow-x-auto mt-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} class="btn btn-outline btn-primary">Make Admin</button>}</td>
                                <td><button onClick={() => handleUserDelete(user._id)} className="btn btn-outline btn-secondary">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;