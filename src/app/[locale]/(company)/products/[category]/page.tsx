// prodrouts/[slug].tsx
import { FC } from "react";
import { GetStaticPaths, GetStaticProps, Metadata } from 'next';
import { isArray, isEmpty } from 'lodash';
import Product from '../product';
import { getAllCategories, getProductsByCategorySlug, getProductsData } from '../helper';
import ContantUs from '@/src/components/ContantUs/ContantUs';
import Head from "next/head";

export const metadata: Metadata = {
  title:  'Products | CAPITAL WOOLS',
}

const Products = async ({
  params: { category , locale  },
}: {
  params: { category: string , locale: string  }
}) => {
  const {products} = await fetchData(category);
  // if (isEmpty(products) || !isArray(products)) {
  //   return null;
  // }
console.log("localekjhg",products);

  return (
    <main className="container overflow-x-hidden pt-8 px-4  lg:px-20  lg:pt-15 antialiased">
    <div className="flex flex-wrap -mx-3 ">
      {products.length ? products.map(product => {
        return (
          <Product key={product?.id} product={product}  params={locale} />
        )
      }) : null}
  
    </div>
       <section className='my-28' id='contact-us'>
       <ContantUs  params={{locale}}/>
       </section>
       </main>
  )
}


const fetchData = async (category: string) => {
  const { data: products } = await getProductsByCategorySlug(category);

  return {
  products: products ?? {} ,
  }
};



export default Products;