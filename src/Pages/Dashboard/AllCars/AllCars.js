import React, { useEffect, useState } from 'react';

const AllCars = () => {
    const [allCars, setAllCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cars/allcars')
            .then(res => res.json())
            .then(data => setAllCars(data))
    }, [])

    const handleMakeAds = (
        brandName,
        model,
        resellPrice
    ) => {


        fetch('http://localhost:5000/ads', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                brandName, model, resellPrice
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your Ad is created successfully');
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <h2 className='text-2xl flex flex-start'>All Cars - <span className='text-indigo-600'>{allCars.length}</span></h2>
            <div className="overflow-x-auto mt-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Brand Name</th>
                            <th>Model</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allCars?.map((car, index) => <tr key={car._id}>
                                <th>{index + 1}</th>
                                <td>{car.brandName}</td>
                                <td>{car.model}</td>
                                <td>${car.resellPrice}</td>
                                <td>
                                    {
                                        car?.role === 'seller' && <p><span className="badge badge-warning">Pending</span></p>
                                    }

                                    {
                                        car?.role !== 'seller' && <p><span className="badge badge-success">Verified</span></p>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleMakeAds(
                                        car.brandName, car.model, car.resellPrice
                                    )} className='btn btn-sm btn-primary'>Make Ads</button>
                                    <button className='btn btn-sm btn-danger ml-2'>Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCars;