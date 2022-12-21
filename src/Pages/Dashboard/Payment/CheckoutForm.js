import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ order }) => {
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const { brandName, resellPrice, email } = order;
    const price = parseInt(resellPrice);
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch(`https://b612-used-products-resale-server-side-smahaduzzaman.vercel.app/create-payment-intent`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

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
            console.log(error);
            setCardError(error.message);
        } else {
            setCardError('');
        }

        setSuccess('');
        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: email,
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }

        if (paymentIntent.status === 'succeeded') {
            console.log('card info', card);

            const payment = {
                paymentId: paymentIntent.id,
                brandName,
                resellPrice,
                email,
                orderId: order._id,
            }

            fetch(`https://b612-used-products-resale-server-side-smahaduzzaman.vercel.app/payment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(payment),
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccess('Payment successful!');
                        setTransactionId(paymentIntent.id);
                    }
                })
        }

        setProcessing(false);

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
                <button
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}
                    className='px-5 py-2 bg-indigo-700 text-white'>
                    Just Pay
                </button>
            </form>
            <p className='text-red-600 flex flex-start mt-3'>{cardError}</p>
            {
                success && <div>
                    <p className='text-green-600 flex flex-start mt-3'>{success}</p>
                    <p className='text-green-600 flex flex-start mt-3'>Transaction ID: {transactionId}</p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;