"use client"
import React from 'react';
import ContantUs from "@/src/components/ContantUs/ContantUs";
import Head from 'next/head';
import { useTranslations } from 'next-intl'


const Faq = ({
    params: { locale },
}: {
    params: { locale: string }
}) => {
    const t = useTranslations('FAQ');
    const faq = [
        { question: t("q1"), answer: t("n1") },
        { question: t("q2"), answer: t("n2") },
        { question: t("q3"), answer: t("n3") }
    ]
    return (
        <main className="container overflow-x-hidden pt-8 px-4  lg:px-20  lg:pt-15 antialiased">
            <Head>
                <title>{t("subtitle")}</title>
                <meta name="description" content={t("description")} />
            </Head>
            <h1 className={`${locale === "ar" ? " font-primaryAR" : 'font-primaryEN'} text-2xl font-bold mb-4`}>{t("title")}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {faq.map((faq, index) => (
                    <div key={index} className={`${locale === "ar" ? " font-secondaryAR" : 'font-secondaryEN'} border rounded p-4`}>
                        <h2 className={`${locale === "ar" ? " font-primaryAR" : 'font-primaryEN'} text-lg font-bold mb-2`}>{faq.question}</h2>
                        <p>{faq.answer}</p>
                    </div>
                ))}
            </div>
            <section className='my-28' id='contact-us'>
                <ContantUs  params={{locale}}/>
                </section>
        </main>
    );
};

export default Faq;
