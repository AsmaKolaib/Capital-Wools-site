import React, { FC } from 'react';
import ContantUs from '@/src/components/ContantUs/ContantUs';
import { fetchData, fetchPosts, getFeaturedMediaUrl } from './helper';
import Blog from '@/src/components/Blog/Blog';
import { Metadata } from 'next';

interface PageProps {
  posts: any
  params: { locale: string }

}
export const metadata: Metadata = {
  title: {
    default: 'Blog | CAPITAL WOOLS',
  },
    description: 'Capital Wools Company offers a variety of winter clothing fabrics and uniform fabrics.',

}
const Page: FC<PageProps> = async ({ params: { locale = "en" } }) => {

  const { posts } = await fetchData(locale);

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

