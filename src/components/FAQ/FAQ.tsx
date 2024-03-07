"use client"
import React from 'react'
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'
import Question from './Question'
import { useTranslations } from 'next-intl'
const FAQ = ({
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
        <div className={`${locale === "ar" ? " font-secondaryAR" : "font-secondaryEN"}  grid grid-cols-1  lg:grid-cols-2 gap-6`} >
            <div className={` w-full `} >
                <Heading locale={locale} title={<>{t("title1")} <br /> {t("title2")}</>} subTitle={t("subtitle")} />
                <Paragraph locale={locale} text={t("FAQtext")} />
            </div>
            <div className='w-full' >
                {
                    faq.map((question, index) => {
                        return (
                            <div key={index}>
                                <Question locale={locale} header={question.question} text={question.answer} />

                            </div>)
                    })
                }

            </div>
        </div>
    )
}

export default FAQ