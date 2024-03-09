"use client"
import React, { FC } from 'react';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
import { isArray, isEmpty } from 'lodash';
import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';
import { getTheCategoryImage } from '@/src/helpers/helper';

interface CategoriesPropers {
  Categories: any,
  params: { locale: string }
}

const CategorySection: FC<CategoriesPropers> = ({ Categories, params: { locale } }) => {
  const t = useTranslations('ProductsPage');

  if (isEmpty(Categories) || !isArray(Categories)) {
    return null;
  }

  const data = Categories.map((category) => ({
    id: category.id,
    name: category.name,
    slug: category.slug,
    image: category.image ? category.image : 'https://placehold.co/600x400'
  }));

  return (
    <>
      <div className="">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <Heading locale={locale} title={<>{t("title")}</>} subTitle={t("subtitle")} />
                <Paragraph locale={locale} text={t("ProductText")} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {data.map((category) => (
              <Link key={category.id} href={`/products/${category.slug}`} className="flex flex-col items-center w-full h-full">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-auto h-30 lg:h-60 object-cover mb-2"
                />
                <Heading subTitle={category.name} locale={locale} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategorySection;
