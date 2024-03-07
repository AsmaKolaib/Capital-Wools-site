import React, { FC } from 'react'
import ProductGallery from './product-gallery';


interface SingleProductProps {
    product: any
}
const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
      originalWidth: 1000,
      originalHeight: 600,
      thumbnailWidth: 250,
      thumbnailHeight: 150
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
     originalWidth: 1000,
      originalHeight: 600,
      thumbnailWidth: 250,
      thumbnailHeight: 150
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
      originalWidth: 1000,
      originalHeight: 600,
      thumbnailWidth: 250,
      thumbnailHeight: 150
    },
  ];
const SingleProduct: FC<SingleProductProps> = ({ product }) => {

    const productInfo = product[0];
    // console.log(productInfo.images);
    
    return productInfo ? (
        <div className="single-product container mx-auto my-32 px-4 xl:px-0 p-10">
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="product-images">
                    {productInfo?.images?.length ? (
                        <ProductGallery items={productInfo?.images}  />
                    ) : null}
                </div>
       
                <div className="product-info">
                    <h4 className="products-main-title text-2xl uppercase">{productInfo.name}</h4>
                    {productInfo.description ? (
                        <div
                            dangerouslySetInnerHTML={{
                                __html: productInfo.description,
                            }}
                            className="product-description mb-5"
                        />
                    ) : null}
                </div>
            </div>
        </div>
    ) : <>Ho</>;
};

export default SingleProduct;
