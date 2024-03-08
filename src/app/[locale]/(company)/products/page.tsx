import CategorySection from '@/src/components/Categories/Category'
import { getAllCategories } from './helper';
import React, { FC } from 'react'
import ContantUs from '@/src/components/ContantUs/ContantUs';
import { getTheCategoryImage } from '@/src/helpers/helper';
interface productsProps {
  posts: any;
  Categories: any
  params: { locale: string }
 
}

const page : FC<productsProps> = async ({ params: { locale }})=> {
  const fetchData = async () => {

    // const  data  = await getTheCategoryImage(18);
    const  Categories  = await getAllCategories(locale);    
    const CategoriesInfo = await Promise.all(Categories.map(async (category) => {
    const imageSrc = await getTheCategoryImage(category.term_id);
    return {
        id: category.term_id,
        name: category.name,
        slug: category.slug,
        image: imageSrc 
    };
  }));
    return {
        CategoriesInfo: CategoriesInfo ?? {},
    }
};
const {  CategoriesInfo } = await fetchData();
  return (
    <main className="container overflow-x-hidden pt-8 px-4  lg:px-20  lg:pt-15 antialiased">

<section className=''>
    <CategorySection Categories={CategoriesInfo} params={{locale}}/>
    </section>
     <section className='my-28' id='contact-us'>
     <ContantUs params={{locale}}/>
     </section>
</main>
  )
}

export default page