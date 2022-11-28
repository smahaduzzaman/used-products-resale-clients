import React from 'react';

const Advertisement = ({ advertisement }) => {
    const { brandName, model, resellPrice } = advertisement;
    return (
        <div className="card w-96 bg-indigo-900 mr-5 text-primary-content">
            <div className="card-body">
                <div className='flex justify-between'>
                    <h2 className="card-title text-2xl">{brandName}</h2>
                    <div className="badge badge-accent badge-outline">Ads.</div>
                </div>
                <p className='text-left'>{model}</p>
                <p className='text-left'>${resellPrice}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-sm">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Advertisement;