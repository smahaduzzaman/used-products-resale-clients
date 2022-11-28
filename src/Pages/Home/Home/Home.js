import React from 'react';
import Cars from '../Cars/Cars';
import Hero from '../Hero/Hero';
import OurSellers from '../OurSellers/OurSellers';
import PopulerBrands from '../PopulerBrands/PopulerBrands';
import Advertisements from '../Advertisements/Advertisements';
import Gallery from '../Gallery/Gallery';
import ViewAllButton from '../ViewAllButton/ViewAllButton';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Advertisements></Advertisements>
            <Cars></Cars>
            <ViewAllButton></ViewAllButton>
            <OurSellers></OurSellers>
            <Gallery></Gallery>
            <PopulerBrands></PopulerBrands>
        </div>
    );
};

export default Home;