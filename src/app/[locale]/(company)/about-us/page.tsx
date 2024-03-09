"use client"
import ContantUs from "@/src/components/ContantUs/ContantUs";
import FAQ from '@/src/components/FAQ/FAQ';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

const metadata: Metadata = {
    title: 'About us | CAPITAL WOOLS',
};

const About = ({
    params: { locale },
}: {
    params: { locale: string }
}) => {
    const t = useTranslations('AboutPage');

    useEffect(() => {
        document.title = metadata.title;
    }, []);

    return (
        <main className="container overflow-x-hidden pt-8 px-4 lg:px-20 lg:pt-15 antialiased">
            <div className={`${locale === "ar" ? "font-secondaryAR" : 'font-secondaryEN'} `}>
                <h1 className="text-3xl font-bold mb-6 font-primaryAR">{t('title')}</h1>
                <div className="flex flex-col md:flex-row md:space-x-6 gap-6">
                    <div className="md:w-1/2">
                        <img
                            src="/images/about-us.jpeg"
                            alt="About Us Image"
                            className="shadow-md"
                        />
                    </div>
                    <div className="md:w-1/2 mt-6 md:mt-0">
                        <p className="text-lg leading-relaxed font-bold p-4 pt-0">
                            {t('aboutText')}
                        </p>
                    </div>
                </div>
            </div>
            <section className='my-28'><FAQ params={{ locale }} /></section>
            <section className='my-28' id='contact-us'>
                <ContantUs params={{ locale }} />
            </section>
        </main>
    );
};

export default About;
