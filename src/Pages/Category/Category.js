import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CatCar from './CatCar';

const Category = () => {
    const [cars, setCars] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get(' https://b612-used-products-resale-server-side-smahaduzzaman.vercel.app/cars')
            .then(res => setCars(res.data))
        axios.get(' https://b612-used-products-resale-server-side-smahaduzzaman.vercel.app/category')
            .then(res => setCategory(res.data))
    }, [])

    return (
        <div>
            <h2>Total of this Cars: {cars.length}</h2>
            {
                cars?.map(car => <CatCar
                    key={car._id}
                    car={car}
                ></CatCar>)
            }
        </div>
    );
};

export default Category;