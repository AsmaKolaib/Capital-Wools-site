
import React from 'react'
import { getProductBySlug, getProductsByCategorySlug, getProductsData } from '../../helper';
import SingleProduct from '@/src/components/singleProduct/single-product';
import ContantUs from '@/src/components/ContantUs/ContantUs';
const fetchData = async (productSlug: string) => {
  const { data: products } = await getProductBySlug(productSlug);

  return {
  product: products ?? {}
  }
};
const Page = async ({
  params: { productSlug ,locale },
}: {
  params: { productSlug: string , locale: string }
}) => {
  const {product} = await fetchData(productSlug);

  return (
    <main className="container overflow-x-hidden pt-8 px-4 lg:px-20 antialiased">
      <SingleProduct product={product} />
      <section className='my-28' id='contact-us'>
       <ContantUs  params={{locale}}/>
       </section>
    </main>
  )
}
export async function getStaticPaths({ locale ='en' }) {
  const { data: products } = await getProductsData();

  const paths = products.flatMap((product: { slug: string; categories: { slug: string; }[]; }) =>
{
      const categorySlug = product.categories.length > 0 ? product.categories[0].slug : '';
      return { params: { locale, category: categorySlug, productSlug: product.slug } };
    }
  );

  return {
    paths,
    fallback: true,
  };
} 
export default Page