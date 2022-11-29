import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ selectCar, setSelectCar, bookingDate, setBookingDate, refetch }) => {
    const [cars, setCars] = useState([]);
    const { brandName, model, resellPrice, location } = selectCar;
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(' https://b612-used-products-resale-server-side-smahaduzzaman.vercel.app/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    const handleBooking = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const option = event.target.option.value;
        console.log(name, email, phone, option);

        const orders = {
            name,
            email,
            phone,
            brandName,
            model,
            resellPrice,
            location,
            option,
            bookingDate
        }

        fetch(' https://b612-used-products-resale-server-side-smahaduzzaman.vercel.app/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orders)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Your order has been placed successfully');
                    // setSelectCar({});
                    setSelectCar(null);
                    setBookingDate(null);
                    refetch();
                }
            })
            .catch(err => {
                toast.error('Already Booked this Car');
            })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal p-10">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <div className=''>
                        <h3 className="text-lg text-left font-bold">{brandName}</h3>
                        <p className='text-sm text-left'>{model}</p>
                        <p className="text-md text-left text-gray-500">Price: ${resellPrice}</p>
                    </div>

                    <form onSubmit={handleBooking}>
                        <input type="text" name='date' value={bookingDate} disabled className="input input-bordered input-primary w-full mt-5" />

                        <input type="text" name='name' defaultValue={user?.displayName} placeholder="Enter Name" className="input input-bordered input-primary w-full mt-5" />

                        <input type="email" name='email' defaultValue={user?.email} disabled placeholder="Enter Email" className="input input-bordered input-primary w-full mt-5" />

                        <input type="text" name='phone' placeholder="Enter Your Phone no" className="input input-bordered input-primary w-full mt-5" />

                        <select name='option' className="select select-primary w-full max-w-xs mt-5">
                            <option disabled selected>Select Meeting Location</option>
                            {
                                cars.map(carData => <option
                                    value={carData.id}>
                                    {carData.location.city},
                                    {carData.location.street},
                                    {carData.location.houseNumber},
                                    {carData.location.flatNo}
                                </option>)
                            }
                        </select>
                        <input type="submit" className="input input-bordered input-primary w-full mt-5 text-white bg-indigo-500 focus:outline-none hover:bg-indigo-600 rounded" value="SUBMIT" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;