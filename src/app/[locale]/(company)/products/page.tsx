import CategorySection from '@/src/components/Categories/Category'
import { getAllCategories } from './helper';
import React from 'react'
import ContantUs from '@/src/components/ContantUs/ContantUs';
const fetchData = async () => {

  const { data: Categories } = await getAllCategories();
  return {
      Categories: Categories ?? {},
  }
};

const page =async ({
  params: { locale },
}: {
  params: { locale: string }
}) => {
  const { Categories } = await fetchData();

  return (
    <main className="container overflow-x-hidden pt-24 px-4  lg:px-20  lg:pt-28 antialiased">

<section className=''>
    <CategorySection Categories={Categories} params={{locale}}/>
    </section>
     <section className='my-28' id='contact-us'>
     <ContantUs params={{locale}}/>
     </section>
</main>
  )
}

export default page