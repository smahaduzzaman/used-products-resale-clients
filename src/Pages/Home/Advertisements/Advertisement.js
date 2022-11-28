import React from 'react';
import { toast } from 'react-toastify';

const Advertisement = ({ advertisement }) => {
    const { brandName, model, resellPrice } = advertisement;

    const handleAdsBuyNow = () => {
        fetch('http://localhost:5000/orders/ads', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                brandName, model, resellPrice
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('Your Order is created successfully');
                }
            })
            .catch(err => {
                console.log(err);
                toast.error(err.message);
            })
    }

    return (
        <div className="card w-96 bg-indigo-900 m-8 text-primary-content">
            <div className="card-body">
                <div className='flex justify-between'>
                    <h2 className="card-title text-2xl">{brandName}</h2>
                    <div className="badge badge-accent badge-outline">Ads.</div>
                </div>
                <p className='text-left'>{model}</p>
                <p className='text-left'>${resellPrice}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleAdsBuyNow} className="btn btn-sm">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Advertisement;