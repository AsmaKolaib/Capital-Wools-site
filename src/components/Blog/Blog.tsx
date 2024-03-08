"use client"
import React, { FC } from 'react';
import BlogCard from '@/src/components/Blog/Card';
import Button from '@/src/components/Button/Button';
import Heading from '@/src/components/Heading/Heading';
import { getFeaturedMediaUrl } from '@/src/helpers/helper';
import Paragraph from '../Paragraph/Paragraph';
import { useTranslations } from 'next-intl'
import { useRouter } from "next/navigation"
interface BlogProps {
  posts: any;
  params: { locale: string }
  button?: boolean

}

const Blog: FC<BlogProps> = ({ posts, params: { locale }, button }) => {
  const t = useTranslations('BlogPage');
  const route = useRouter()
  if (!posts || !Array.isArray(posts)) {
    return null; // or return a loading state, error message, or another component
  }

  return (
    <section className="bg-white">

      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
            <Heading locale={locale} title={<>{t("title")}</>} subTitle={t("subtitle")} />
            <Paragraph locale={locale} text={t("blogText")} />
          </div>
        </div>
      </div>

      <article className="-mx-4 flex flex-wrap">
        {posts.map((post: { slug: string; id: React.Key | null | undefined; date: string; title: string; content: string; featuredImage: string; }) => (
          <BlogCard
            slug={post.slug}
            key={post.id}
            date={post.date}
            CardTitle={post.title}
            CardDescription={post.content}
            image={post.featuredImage}
            locale={locale}
          />
        ))}
      </article>
      {
        button &&
        (<div className='flex justify-center'>
          <Button onClickFun={() => { route.push(`${locale}/blog`) }} >{t("buttonText")} </Button>
        </div>)
      }

    </section >
  );
};

export default Blog;
