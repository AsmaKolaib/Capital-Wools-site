"use client"
import React, { FC } from 'react';
import axios from 'axios';
import BlogCard from '@/src/components/Blog/Card';
import Button from '@/src/components/Button/Button';
import ContantUs from '@/src/components/ContantUs/ContantUs';
import Heading from '@/src/components/Heading/Heading';
import { fetchPosts, getFeaturedMediaUrl } from './helper';
import Link from 'next/link';
import Head from 'next/head';
import { useTranslations } from 'next-intl'
import Paragraph from '@/src/components/Paragraph/Paragraph';

interface PageProps {
  posts: any
  params: { locale: string }

}

const fetchData = async () => {
  const posts = await fetchPosts(50);
  return {
    posts,
  }
};
const Page: FC<PageProps> = async ({ params: { locale } }) => {
  const t = useTranslations('BlogPage');

  const { posts } = await fetchData();
  return (
    <main className="container overflow-x-hidden pt-24 px-4  lg:px-20  lg:pt-28 antialiased">
      <Head>
        <title>{t("title1")}</title>
        <meta name="description" content={t("description")} />
      </Head>
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
            <Heading locale={locale} title={<>{t("title")}</>} subTitle={t("subtitle")} />
            <Paragraph locale={locale} text={t("blogText")} />
          </div>
        </div>
      </div>

      <div className="-mx-4 flex flex-wrap">
        {posts.map((post: { id: React.Key | null | undefined; date: string; title: string; content: string; featuredImage: string; slug: string; }) => (
          <BlogCard
            key={post.id}
            date={post.date}
            CardTitle={post.title}
            CardDescription={post.content} // Use __html key for dangerouslySetInnerHTML
            image={post.featuredImage}
            slug={post.slug}
          />
        ))}
      </div>
      <section className='my-28' id='contact-us'>
        <ContantUs params={{ locale }} />
      </section>
    </main>
  );
};


export default Page;

