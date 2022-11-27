import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const order = useLoaderData();
    console.log(order);
    return (
        <div>
            <h2 className='text-2xl flex flex-start'>Payment For <span className='text-2xl text-indigo-600 ml-2'>{order.brandName}</span></h2>
            <p className='flex flex-start'>Please Pay $<span className='text-indigo-600'>{order.resellPrice}</span></p>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm order={order} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;