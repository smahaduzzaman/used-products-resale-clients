import React, { useEffect, useState } from 'react';
import Advertisement from './Advertisement';

const Advertisements = () => {
    const [advertisements, setAdvertisements] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/ads')
            .then(res => res.json())
            .then(data => setAdvertisements(data))
    }, [])

    return (
        <section className='flex flex-col md:flex-row justify-center my-10'>
            {
                advertisements.map(advertisement => <Advertisement
                    key={advertisement._id}
                    advertisement={advertisement}
                ></Advertisement>)
            }
        </section>
    );
};

export default Advertisements;