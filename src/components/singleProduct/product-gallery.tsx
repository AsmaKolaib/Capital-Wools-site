"use client"
import React, { FunctionComponent } from 'react';
import ImageGallery from 'react-image-gallery';

interface ProductGalleryProps {
    items: any
}

const ProductGallery: FunctionComponent<ProductGalleryProps> = ({ items }) => {

    
    // Construct Images.
    const images = items.map((item: { src: any; }) => {
        console.log(item.src);
        
        return {
            original: item.src,
            thumbnail: item.src,
        };
    });

    return (
        <ImageGallery items={images} />
    );
};
// 
export default ProductGallery;

