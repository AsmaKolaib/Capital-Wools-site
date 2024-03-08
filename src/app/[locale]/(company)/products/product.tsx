// app/[locale]/products/[category] product page

import { FC } from 'react'
import Link from 'next-intl/link';
import Image from '@/components/Image';
import { isEmpty } from 'lodash';


interface ProductPropes {
    product: any
  locale: string 
}
const Product: FC<ProductPropes> = ({ product,locale }) => {

    if (isEmpty(product)) {
        return null;
    }

    console.log(product);


    const img = product?.images?.[0] ?? {};
    const productType = product?.type ?? '';
    console.log(img.src);
    return (
        <div className="mt-4 mb-8 px-3 w-full overflow-hidden sm:w-1/2 md:w-1/3 xl:w-1/4">
            <Link href={`${product?.categories[0].slug}/${product?.slug}`}>
                <img src={img?.src ?? 'https://via.placeholder.com/380x380'} alt={img?.alt ?? ''} width={380}
                     height={380} className=' object-cover object-center' />
                <h6 className="font-bold uppercase my-2 tracking-0.5px">{product?.name ?? ''}</h6>
                {/* <div className="mb-4" dangerouslySetInnerHTML={{ __html: sanitize( product?.price_html ?? '' ) }}/> */}

            </Link>


        </div>
    )
}

export default Product; 
