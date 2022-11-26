import React, { useEffect, useState } from 'react';
import AllCars from './AllCars';


const ViewAllCars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/viewallcars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    return (
        <div>
            <h2>Our Exclusive Cars</h2>
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