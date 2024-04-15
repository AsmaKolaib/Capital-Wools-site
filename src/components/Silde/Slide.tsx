import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image, { StaticImageData } from 'next/image';
import Img1 from '../../../public/images/logo1 (1).gif';
import Img2 from '../../../public/images/logo1 (2).gif';
import Img3 from '../../../public/images/logo1 (3).gif';


const Slide = ({ locale }: { locale: string }) => {
    const images: StaticImageData[] = [Img1, Img2, Img3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 6000);

        return () => clearInterval(intervalId);
    }, [images.length]);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className='flex items-center justify-center  w-full h-full'>
            <div className="  relative  w-full h-full">

                <div className="absolute -top-10 right-0 z-5 w-full h-80 bg-primary"></div>
                <Image
                    src={images[currentImageIndex]}
                    alt={`Img${currentImageIndex + 1}`}
                    className="absolute -top-5 -left-6 z-10 h-64 w-96"
                />
                {/* Assuming you want the next image to appear after the first */}
                <Image
                    src={images[(currentImageIndex + 1) % images.length]}
                    alt={`Img${(currentImageIndex + 1) % images.length + 1}`}
                    className="absolute -bottom-32 xl:-bottom-5 right-0 z-20 h-64 w-96"
                />
                <ArrowLeft onClick={prevImage} className={`${locale === "ar" ? "left-0" : ''} absolute bottom-20 xl:bottom-3 bg-bgColor z-20 p-1 w-8 h-8 cursor-pointer hover:text-secondary  `} />
                <ArrowRight onClick={nextImage} className='absolute bottom-20 xl:bottom-3 left-14 bg-bgColor z-20 p-1 w-8 h-8 cursor-pointer  hover:text-secondary ' />

            </div>
        </div>

    );
};

export default Slide;
