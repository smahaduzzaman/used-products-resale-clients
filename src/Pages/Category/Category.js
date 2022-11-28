import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Car from '../Home/Cars/Car';
import CatCar from './CatCar';

const Category = () => {
    // const cars = useLoaderData();

    const [cars, setCars] = useState([]);
    const [category, setCategory] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/cars')
            .then(res => setCars(res.data))
        axios.get('http://localhost:5000/category')
            .then(res => setCategory(res.data))
    }, [])

    return (
        <div>
            <h2>Total of this Cars: {cars.length}</h2>
            {
                cars.length === 0 &&
                cars?.map(car => <CatCar
                    key={car._id}
                    car={car}
                ></CatCar>)
            }
        </div>
    );
};

export default Category;