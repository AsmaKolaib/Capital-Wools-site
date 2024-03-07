"use client"
import React from 'react'
import { useTranslations } from 'next-intl'


const Banner = () => {
    const t = useTranslations('Banner');

    return (
        <div className=' relative w-full h-40 lg:h-52 bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url('/images/image2.jpg')` }} >
            <figure className=' absolute h-full w-full z-10 ' style={{ backgroundImage: `url('/images/bg-img.png')` }}></figure>
            <div className='absolute bg-primary/50 w-full h-full flex flex-col items-center justify-center '>
                <p className='mb-4 text-center text-base lg:text-2xl font-bold text-white'>{t("title1")}<br /> {t("title2")}</p>
                <h4 className=' block text-sm lg:text-lg font-thin text-white'>{t("who")}</h4>
            </div>

        </div>
    )
}

export default Banner