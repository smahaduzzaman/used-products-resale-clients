import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Car from './Car';

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/cars')
            .then(res => setCars(res.data))
    }, [])
    useEffect(() => {
        axios.get('http://localhost:5000/cars')
            .then(res => setCategories(res.data))
    }, [])
    return (
        <section className="py-8 dark:bg-gray-800 dark:text-gray-100">
            <div className="container mx-auto">
                <div className="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
                    <h2 className="text-2xl font-bold leading-none sm:text-4xl">Quo et liber recusabo</h2>
                    <p className="px-8 my-4">Graeco causae vim cu, alii option ancillae sea ut. Ad mea alii pertinax, ei sed falli ponderum adipisci. Vis iisque scripta cu. Sea ex mollis consulatu dissentiet, dicta viris volutpat mea an, et nec discere epicuri</p>
                </div>
                <div className="grid grid-cols-5 p-4 md:p-8">
                    <div className="flex justify-center px-4 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start">
                        <button className="p-2 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">Mucius</button>
                        <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-violet-400 dark:text-gray-50">Fabellas</button>
                        <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">Aperiam</button>
                        <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">Nonumy</button>
                        <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">Propriae</button>
                    </div>
                    <div className="grid gap-12 py-4 text-center sm:grid-cols-1 col-span-full md:col-span-4 md:text-left">
                        <h2>Total Cars: {cars.length}</h2>
                        {
                            cars.slice(0, 3).map((car) => <Car key={car.id} car={car}></Car>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cars;