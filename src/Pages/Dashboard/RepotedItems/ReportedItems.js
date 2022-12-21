import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ReportedItems = () => {
    const [reportedItems, setReportedItems] = useState([])
    const { brandName, model, resellPrice, description } = reportedItems;

    useEffect(() => {
        fetch('http://localhost:5000/reportlist')
            .then(res => res.json())
            .then(data => setReportedItems(data))
    }, [])

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });


    const handleDeleteReportedItem = (id) => {
        fetch(`http://localhost:5000/reportlist/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast('Reported Item deleted successfully');
                    refetch();
                }
            })
    }

    return (
        <div>
            <h2 className='text-2xl flex flex-start'>Reported Items</h2>
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
                        {reportedItems?.length &&
                            reportedItems?.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.brandName}</td>
                                <td>{item.model}</td>
                                <td>{item.description.slice(0, 20)}...</td>
                                <td>{item.resellPrice}</td>
                                <td>
                                    {
                                        item.resellPrice && !item.paid && <Link to="">
                                            <button onClick={() => handleDeleteReportedItem(item._id)} className="btn btn-outline btn-primary">Delete</button>
                                        </Link>
                                    }
                                    {
                                        item.resellPrice && item.paid && <button className="btn btn-outline btn-success">Pending</button>
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

export default ReportedItems;