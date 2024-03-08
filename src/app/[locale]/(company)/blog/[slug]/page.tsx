// pages/[slug].js

import React, { FC } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Heading from '@/src/components/Heading/Heading';
import Link from 'next-intl/link';
import { GetStaticPaths } from 'next';
import { fetchPostData, sanitize } from '../helper';
import ContantUs from '@/src/components/ContantUs/ContantUs';
import { useIntl } from 'next-intl';
interface PostPropers {
    post: any
}


const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
};

const Post = async ({
    params: { slug, locale }
}: {
    params: { slug: string, locale: string }
}) => {
    const fetchData = async (slug: string) => {
        const post = await fetchPostData(slug);
        return {
            post,
        }
    };
    console.log(locale)
    const { post } = await fetchData(slug);
    console.log("post", post);
    const { title, content, featuredImage, date } = post;
    const formattedDate = formatDate(date);
    return (
        <main className="container overflow-x-hidden pt-24 px-4  lg:px-20  lg:pt-28 antialiased">

            <section className="bg-white">
                <div className="container">
                    <div className="mx-auto pb-5 max-w-[710px]">
                        <Heading title={title} subTitle={formattedDate} />
                        <span className=' border-b-2 border-b-secondary text-gray-500' >By Admin</span>
                    </div>
                    <div className="mx-auto pb-10 max-w-[710px]  text-center ">
                        <img src={featuredImage} alt={title} className="w-full h-[310px]" />
                    </div>
                    <div className={`${locale === "ar" ?"pl-10":"pr-10" }  mx-auto  pb-10 max-w-[710px]  `}>
                        <div dangerouslySetInnerHTML={{ __html: sanitize(content ?? '') }} />
                    </div>
                    {/* <div className='w-full text-center text-base'>
                        <Link href="/blog" className=" text-secondary font-secondaryEN hover:text-primary" >← View all posts</Link>
                    </div> */}


                </div>
            </section>
            <section className='my-28' id='contact-us'>
                <ContantUs params={{ locale }} />
            </section>
        </main>

    );
};


export const getStaticPaths: GetStaticPaths = async () => {
    // const { locale } = useIntl();
    // Fetch all posts slugs from your API or data source
    const reqUrl = `https://dashboard.capitalwools.com/wp-json/wp/v2/posts?_fields=slug`;
    const res = await axios.get(reqUrl);
    const posts = res.data;

    // Create paths based on post slugs
    const paths = posts.map((post: { slug: any; }) => ({
        params: { slug: post.slug, locale: "en" },
    }));

    return {
        paths,
        fallback: true, // or false if you want to show a 404 page for unknown slugs
    };
};

export default Post;
