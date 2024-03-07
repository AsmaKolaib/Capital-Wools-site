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
            <div className= " py-5 lg:pt-14 lg:pb-20 h-auto overflow-hidden ">
                <div className="    text-gray-600  md:flex md:justify-between md:gap-x-6 ">
                    <div className={`${locale ==="ar" ? "" : 'lg:pr-10'} md:w-full  flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl py-5 `}>
                        <h2 className={` ${locale ==="ar" ? "  tracking-normal" : 'tracking-wide  lg:pr-28'} capitalize text-4xl text-black font-extrabold md:text-5xl  `}>
                        {t("title")}
                        </h2>
                        <Paragraph locale={locale} styling={`${locale ==="ar" ? "" : 'lg:pr-32'}`} text={t("HeroText")}/>
                        <Button onClickFun={()=>{route.push('/services')}} >{t("buttonText")} </Button>
                    </div>
                    <div className="hidden lg:flex md:w-full  mt-14 md:mt-0   ">
                        <Slide locale={locale}  />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Hero;