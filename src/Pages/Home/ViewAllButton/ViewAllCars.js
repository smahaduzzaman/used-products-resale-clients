import React, { useEffect, useState } from 'react';
import AllCars from './AllCars';


const ViewAllCars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('https://b612-used-products-resale-server-side-smahaduzzaman.vercel.app/viewallcars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    return (
        <div>
            <h2 className='text-3xl my-5 '>Our Exclusive Cars: <span className='text-indigo-'>{cars.length}</span></h2>
            {
                cars?.map(car => <AllCars
                    key={car._id}
                    car={car}
                ></AllCars>)
            }
        </div>
    );
};

export default ViewAllCars;