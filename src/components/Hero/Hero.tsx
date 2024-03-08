"use client"
import { useRouter } from "next/navigation"
import Button from "../Button/Button"
import Paragraph from "../Paragraph/Paragraph"
import Slide from "../Silde/Slide"
import { useTranslations } from 'next-intl'
const Hero = ({
    params: { locale },
}: {
    params: { locale: string }
}) => {
    const t = useTranslations('Hero');
    const route = useRouter()
    return (
        <>
            <div className=" py-5 lg:pt-14 lg:pb-20 h-auto overflow-hidden ">
                <div className="    text-gray-600  md:flex md:justify-between md:gap-x-6 ">
                    <div className={`${locale === "ar" ? "" : ''} md:w-full  flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl py-5 `}>
                        <h2 className={`capitalize text-4xl text-black font-extrabold md:text-5xl  ${locale === "ar" ? " font-primaryAR leading-10 tracking-normal" : ' font-primaryEN tracking-wide  lg:pr-28'}  `}>
                            {t("title")}
                        </h2>
                        <Paragraph locale={locale} styling={`${locale === "ar" ? "font-secondaryAR" : ' pr-28 font-secondaryEN'} `} text={t("HeroText")} />
                        <Button onClickFun={() => { route.push('/services') }} >{t("buttonText")} </Button>
                    </div>
                    <div className="hidden lg:flex md:w-full  mt-14 md:mt-0   ">
                        <Slide locale={locale} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Hero;