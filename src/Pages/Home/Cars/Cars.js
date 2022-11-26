import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from './BookingModal';
import Car from './Car';

const Cars = () => {
    const [categories, setCategories] = useState([]);
    const [selectCar, setSelectCar] = useState(null);
    const [bookingDate, setBookingDate] = useState(new Date());

    const { data: cars = [], refetch, isLoading } = useQuery({
        queryKey: 'cars',
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:5000/cars`);
            return data;
        }
    });

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    if (isLoading) {
        return <Loading></Loading>;
    }


    return (
        <section className="py-8 dark:bg-gray-800 dark:text-gray-100">
            <div className="container mx-auto">
                <div className="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
                    <h2 className="text-2xl font-bold leading-none sm:text-4xl">Book Your Desire Cars</h2>
                    <p className="px-8 my-4">Xclusive Cars provide you high quality branded car for your personal usages. Never compromised with the quality of cars. Whether is used cars or this is look like a brand new car actually. All of of this cars and its engines are remaining fresh condition. So book your desire car just now.</p>
                </div>
                <div className="grid grid-cols-5 p-4 md:p-8">
                    <div className="flex justify-center px-4 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start">
                        {
                            categories.map(ctg => <Link to={`/category/${ctg._id}`} className="p-2 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">{ctg.name}</Link>)
                        }
                    </div>
                    <div className="grid gap-12 py-4 text-center sm:grid-cols-1 col-span-full md:col-span-4 md:text-left">
                        <h2>Total Cars: {cars.length}</h2>
                        {
                            cars.map((car) => <Car
                                key={car._id}
                                car={car}
                                setSelectCar={setSelectCar}
                                setBookingDate={setBookingDate}
                            ></Car>)
                        }
                    </div>
                </div>
            </div>
            {
                selectCar &&
                <BookingModal
                    selectCar={selectCar}
                    setSelectCar={setSelectCar}
                    bookingDate={bookingDate}
                    setBookingDate={setBookingDate}
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default Cars;