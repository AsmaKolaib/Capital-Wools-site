// prodrouts/[slug].tsx
import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from 'next';
import { isArray, isEmpty } from 'lodash';
import Product from '../product';
import { getAllCategories, getProductsByCategorySlug, getProductsData } from '../helper';
import ContantUs from '@/src/components/ContantUs/ContantUs';
const Products = async ({
  params: { category , locale  },
}: {
  params: { category: string , locale: string  }
}) => {
  const {products} = await fetchData(category);

  if (isEmpty(products) || !isArray(products)) {
    return null;
  }
console.log("localekjhg",locale);

  return (
    <main className="container overflow-x-hidden pt-24 px-4  lg:px-20  lg:pt-28 antialiased">
    <div className="flex flex-wrap -mx-3 overflow-hidden mt-32 ">
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
