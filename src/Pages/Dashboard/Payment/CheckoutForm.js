import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = ({ order }) => {
    const [cardError, setCardError] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    const { brandName, resellPrice, _id } = order;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError(null);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className='bg-gray-200 tex-black mt-5 w-1/2 bordered p-10'>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe} className='px-5 py-2 bg-indigo-700 text-white'>
                    Pay
                </button>
            </form>
            <p className='text-red-600 flex flex-start mt-3'>{cardError}</p>
        </>
    );
};

export default CheckoutForm;