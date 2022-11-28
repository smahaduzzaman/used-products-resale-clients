import React from 'react';
import brand1 from '../../../assets/images/gallery/banner01.jpg';
import brand2 from '../../../assets/images/gallery/banner02.jpg';
import brand3 from '../../../assets/images/gallery/banner03.jpg';
import brand4 from '../../../assets/images/gallery/banner05.jpg';
import brand5 from '../../../assets/images/gallery/banner06.jpg';
import brand6 from '../../../assets/images/gallery/images2.jpg';

const Gallery = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <div class="flex w-full mb-20 flex-wrap">
                    <h1 class="sm:text-3xl text-2xl text-left font-medium title-font text-gray-500 lg:w-1/3 lg:mb-0 mb-4">Excellent Cars those are collected from Royleity Community.</h1>
                    <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-left">Xclusive Cars offer you the best quality cars those are refreash by the skilled engenier in the world and We offered many type of gift with every car sell.</p>
                </div>
                <div class="flex flex-wrap md:-m-2 -m-1">
                    <div class="flex flex-wrap w-1/2">
                        <div class="md:p-2 p-1 w-1/2">
                            <img alt="gallery" class="w-full object-cover h-full object-center block" src={brand1} />
                        </div>
                        <div class="md:p-2 p-1 w-1/2">
                            <img alt="gallery" class="w-full object-cover h-full object-center block" src={brand2} />
                        </div>
                        <div class="md:p-2 p-1 w-full">
                            <img alt="gallery" class="w-full h-full object-cover object-center block" src={brand3} />
                        </div>
                    </div>
                    <div class="flex flex-wrap w-1/2">
                        <div class="md:p-2 p-1 w-full">
                            <img alt="gallery" class="w-full h-full object-cover object-center block" src={brand4} />
                        </div>
                        <div class="md:p-2 p-1 w-1/2">
                            <img alt="gallery" class="w-full object-cover h-full object-center block" src={brand5} />
                        </div>
                        <div class="md:p-2 p-1 w-1/2">
                            <img alt="gallery" class="w-full object-cover h-full object-center block" src={brand6} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;