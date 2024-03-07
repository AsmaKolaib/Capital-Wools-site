"use client"
import React, { FC } from 'react'
import Heading from '../Heading/Heading';
import Button from '../Button/Button';
import Image from 'next/image';
import Paragraph from '../Paragraph/Paragraph';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl'

interface ImageBoxPropers {
  title: string,
  image: string,
  alt: string,
  locale?: string 
}

const AboutUs = ({
  params: { locale },
}: {
  params: { locale: string }
}) => {
  const t = useTranslations('AboutUs');

  const route = useRouter();
  return (
    <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12  bg-white '>
      <div className=' flex flex-wrap max-h-[30rem]  ' >
        <div className='w-full h-2/4 '>       <ImageBox locale={locale} title={t("Quality")} image='/images/image1.jpg' alt='Quality ' /></div>
        <div className={`${locale ==="ar" ? " pl-2" : 'pr-2'}  w-2/4 pt-4 `}>       <ImageBox locale={locale} title={t("Luxury")} image='/images/image4.jpg' alt='Luxury ' /></div>
        <div className='w-2/4 pt-4'>     <ImageBox locale={locale} title={t("Diversity")} image='/images/image2.jpg' alt='Diversity ' /></div>
      </div>
      <div className='flex items-center ' >
        <div className="w-full">
          <div className="bg-white p-10 shadow-2 shadow-lg  md:px-7 xl:px-10">
            <Heading locale={locale} title={<>{t("title")}</>} subTitle={t("subtitle")} />
            <Paragraph locale={locale} styling="mb-6 leading-relaxed" text={t("AboutUsText")} />
            <Button onClickFun={() => { route.push('/about-us') }} >{t("buttonText")}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
const ImageBox: FC<ImageBoxPropers> = ({ image, alt, title ,locale }) => {
  return (

    <div className=" relative w-full h-full bg-black">
      <Image
        src={image}
        alt={alt}
        width={400}
        height={400}
        className="w-full h-full bg-cover bg-center"
      />
      <span className={ `${locale ==="ar" ? " right-10" : 'left-10'}  absolute  bottom-10  text-primary bg-secondary px-3 py-1`}>{title}</span>
    </div>

  );
};


