import React, { FC } from 'react';
import { fetchPosts, getAllCategories, getTheCategoryImage } from '@/src/helpers/helper';
import Blog from '@/src/components/Blog/Blog';
import Banner from '@/src/components/Banner/Banner';
import Service from '@/src/components/Services/Services';
import AboutUs from '@/src/components/AboutUs/AboutUs';
import Hero from '@/src/components/Hero/Hero';
import FAQ from '@/src/components/FAQ/FAQ';
import ContantUs from "@/src/components/ContantUs/ContantUs";
import CategorySection from '@/src/components/Categories/Category';
import Head from 'next/head';
import Header from '@/src/components/Header/header';
import Footer from "@/src/components/Footer/Footer";
import "./loading"
// import Header from '@/src/components/Header1';
interface HomeProps {
    posts: any;
    CategoriesInfo: any
    params: { locale: string }
   
}

const Home: FC<HomeProps> = async ({ params: { locale }}) => {
    const fetchData = async () => {
        const posts = await fetchPosts(3,locale);
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
            posts,
            CategoriesInfo: CategoriesInfo ?? {},
        }
    };
    

    
    const { posts, CategoriesInfo } = await fetchData();
    console.log("image",CategoriesInfo);
    return (
        <>
        <Header locale={locale}/>
            <main className="container overflow-x-hidden pt-24 px-4  lg:px-20  lg:pt-28 antialiased">
                <Head>
                    <title>Home</title>
                    <meta name="description" content="About our textile and wool trading company." />
                </Head>
                <section className=''>
                    <Hero  params={{locale}}/>
                </section>
                <section className='my-20'>
                    <AboutUs params={{locale}}/>
                </section>
                <section className='my-28'>
                    <Service params={{locale}}/>
                </section>
                <section className='my-28'>
                    <CategorySection Categories={CategoriesInfo} params={{locale}}/>
                </section>
                <section className='my-32'>
                    <Banner />
                </section>
                <article className='my-28'>
                    <Blog posts={posts} params={{locale}}/>
                </article>
                <section className='my-28'>
                    <FAQ params={{locale}}/>
                </section>
                <section className='my-28' id='contact-us'>
                <ContantUs  params={{locale}}/>
                </section>
            </main>
            <Footer locale={locale}/>
        </>
    );
};

export default Home;

