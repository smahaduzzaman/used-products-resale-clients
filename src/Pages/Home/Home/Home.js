import React from 'react';
import Cars from '../Cars/Cars';
import Hero from '../Hero/Hero';
import OurSellers from '../OurSellers/OurSellers';
import PopulerBrands from '../PopulerBrands/PopulerBrands';
import Advertisements from '../Advertisements/Advertisements';
import Gallery from '../Gallery/Gallery';


const Home = () => {
    return (
        <div>
            <Advertisements></Advertisements>
            <Hero></Hero>
            <Cars></Cars>
            <OurSellers></OurSellers>
            <Gallery></Gallery>
            <PopulerBrands></PopulerBrands>
        </div>
    );
};

export default Home;