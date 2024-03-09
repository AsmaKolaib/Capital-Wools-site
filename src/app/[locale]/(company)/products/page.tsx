import React, { FC } from 'react';
import CategorySection from '@/src/components/Categories/Category';
import { getAllCategories } from './helper';
import ContantUs from '@/src/components/ContantUs/ContantUs';
import { getTheCategoryImage } from '@/src/helpers/helper';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Products | CAPITAL WOOLS',
  },
};

interface ProductsProps {
  params: { locale: string };
}

const Page: FC<ProductsProps> = async ({ params: { locale } }) => {
  const fetchData = async () => {
    const Categories = await getAllCategories(locale);
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
    };
  };

  const { CategoriesInfo } = await fetchData();

  return (
    <main className="container overflow-x-hidden pt-8 px-4 lg:px-20 lg:pt-15 antialiased">
      <section className="">
        {CategoriesInfo.length > 0 ? (
          <CategorySection Categories={CategoriesInfo} params={{ locale }} />
        ) : (
          <div className="text-center">
            {
              locale === "ar" ? "لاتوجد منتجات":" There are no products available."
            }
           </div>
        )}
      </section>
      <section className="my-28" id="contact-us">
        <ContantUs params={{ locale }} />
      </section>
    </main>
  );
};

export default Page;
