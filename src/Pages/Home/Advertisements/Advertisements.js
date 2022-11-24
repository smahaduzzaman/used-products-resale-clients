import React, { useState } from 'react';
import Advertisement from './Advertisement';

const Advertisements = () => {
    const [advertisements, setAdvertisements] = useState([]);
    return (
        <section>
            {
                advertisements.map(advertisement => <Advertisement advertisement={advertisement}></Advertisement>)
            }
        </section>
    );
};

export default Advertisements;