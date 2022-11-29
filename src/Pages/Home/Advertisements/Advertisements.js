import React, { useEffect, useState } from 'react';
import Advertisement from './Advertisement';

const Advertisements = () => {
    const [advertisements, setAdvertisements] = useState([]);
    useEffect(() => {
        fetch(' https://b612-used-products-resale-server-side-smahaduzzaman.vercel.app/ads')
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