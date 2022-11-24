import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Car from '../Home/Cars/Car';
import CatCar from './CatCar';

const Category = () => {
    const allCars = useLoaderData();

    return (
        <div>
            <h2>Total of this Cars: {allCars.length}</h2>
            {
                allCars.map(car => <CatCar key={car.id} car={car}></CatCar>)
            }
        </div>
    );
};

export default Category;