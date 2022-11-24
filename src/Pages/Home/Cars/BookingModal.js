import React, { useEffect, useState } from 'react';

const BookingModal = ({ selectCar, setSelectCar, selectedDate }) => {
    const [categories, setCategories] = useState([]);
    const { brandName, model, resellPrice, location } = selectCar;

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    const handleBooking = (event) => {
        event.preventDefault();
        const bookingInfo = { ...selectCar, selectedDate };
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const option = event.target.option.value;

        console.log(name, email, phone, bookingInfo, option);

        // const bookingDetails = {
        //     name,
        //     email,
        //     phone,
        //     bookingInfo,
        //     option
        // };

        setSelectCar(null);

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

                    {/* <p className='flex flex-start my-6'>{location.city}, {location.street}, {location.houseNumber}, {location.flatNo}</p> */}


                    <form onSubmit={handleBooking}>
                        <input type="text" name='date' value={selectedDate} disabled className="input input-bordered input-primary w-full mt-5" />

                        <input type="text" name='name' placeholder="Enter Name" className="input input-bordered input-primary w-full mt-5" />

                        <input type="email" name='email' placeholder="Enter Email" className="input input-bordered input-primary w-full mt-5" />

                        <input type="text" name='phone' placeholder="Enter Your Phone no" className="input input-bordered input-primary w-full mt-5" />

                        <select name='option' className="select select-primary w-full max-w-xs mt-5">
                            <option disabled selected>Select Your Car Type</option>
                            {
                                categories.map(ctg => <option value={ctg.id}>{ctg.name}</option>)
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