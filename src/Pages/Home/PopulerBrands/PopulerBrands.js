import React from 'react';
import brand1 from '../../../assets/images/brands/bmw-logo.png';
import brand2 from '../../../assets/images/brands/ford-logo.png';
import brand3 from '../../../assets/images/brands/honda-logo.png';
import brand4 from '../../../assets/images/brands/hyundai-logo.png';
import brand5 from '../../../assets/images/brands/subaru-logo.png';
import brand6 from '../../../assets/images/brands/toyota-logo.png';
import brand7 from '../../../assets/images/brands/tesla-logo.png';
import brand8 from '../../../assets/images/brands/honda-logo.png';

const PopulerBrands = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100 mt-24">
            <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
                <h2 className="text-3xl font-bold">Top Rated Brands</h2>
                <div className="flex flex-nowrap justify-center lg:justify-between">
                    <img className='w-20' src={brand1} alt="Populer Car" />
                    <img className='w-20' src={brand2} alt="Populer Car" />
                    <img className='w-20' src={brand3} alt="Populer Car" />
                    <img className='w-20' src={brand4} alt="Populer Car" />
                    <img className='w-20' src={brand5} alt="Populer Car" />
                    <img className='w-20' src={brand8} alt="Populer Car" />
                    <img className='w-20' src={brand6} alt="Populer Car" />
                    <img className='w-20' src={brand7} alt="Populer Car" />
                </div>
            </div>
        </section>
    );
};

export default PopulerBrands;