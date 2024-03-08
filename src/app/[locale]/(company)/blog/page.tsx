
import React, { FC } from 'react';
import axios from 'axios';
import BlogCard from '@/src/components/Blog/Card';
import Button from '@/src/components/Button/Button';
import ContantUs from '@/src/components/ContantUs/ContantUs';
import Heading from '@/src/components/Heading/Heading';
import { fetchPosts, getFeaturedMediaUrl } from './helper';
import Link from 'next-intl/link';
import Head from 'next/head';
// import { useIntl, useTranslations } from 'next-intl'
import Paragraph from '@/src/components/Paragraph/Paragraph';
import { GetStaticPaths } from 'next';
import Blog from '@/src/components/Blog/Blog';

interface PageProps {
  posts: any
  params: { locale: string }

}


const Page: FC<PageProps> = async ({ params: { locale = "en" } }) => {
  // const t = useTranslations('BlogPage');
  const fetchData = async () => {
    const posts = await fetchPosts(50, locale);
    return {
      posts,
    }
  };

  const { posts } = await fetchData();
  console.log(locale);

  return (
    <main className="container overflow-x-hidden pt-8 px-4  lg:px-20  lg:pt-15 antialiased">
       <Blog posts={posts} params={{ locale }} button={false} />

      <div className='my-28' id='contact-us'>
        <ContantUs params={{ locale }} />
      </div>
    </main>

  );
};



export default Page;

// export const getStaticPaths: GetStaticPaths = async () => {
//   // const { locale } = useIntl();


//   return {
//     // params: { locale: locale },
//     fallback: true, // or false if you want to show a 404 page for unknown slugs
//   };
// };