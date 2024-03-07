"use client"
import Link from 'next-intl/link';
import { useTranslations } from 'next-intl'
import LocaleSwitcher from './LocaleSwitcher';
import MobileNav from "./MobileNav";
import Logo from "../Logo/Logo";
import {  usePathname } from 'next/navigation'

const  HeaderPage = ({  locale }: { locale: string  })=> {
    const pathname = usePathname();
    const rootName = pathname.split('/')[1];
    const t = useTranslations('Header');

       const navLinks = [
                { lable: t("home"), link: '/' },
                { lable: t("services"), link:`/services` },
                { lable: t("products"), link: '/products' },
                { lable: t("blog"), link: '/blog' },
                { lable: t("aboutUs"), link: '/about-us' },
                { lable: t("FAQ"), link: '/FAQ' },
                { lable: t("ContactUs"), link: '#contact-us' },
                // { lable: 'AR', link: 'AR' }
            ]
    return (
        <header className="fixed top-0 left-0 w-full bg-white/50 backdrop-blur-md z-30 font-primaryEN ">
            <div className="relative container py-6 flex justify-between transition-all ">
                <Logo locale={locale} />
                 {/* desktop navigation */}
                <nav className="hidden md:flex items-center gap-1 md:gap-3 lg:gap-6 capitalize">
                    {navLinks.map((link, index) => (
                        <Link key={index} href={`${link.link}`} className={`${locale === "ar" ? " font-primaryAR" : "font-primaryEN"} text-sm lg:text-base font-semibold tracking-wide text-black hover:text-secondary `} >
                            {link.lable}
                        </Link>
                    ))}
                   <LocaleSwitcher />
                </nav>
                 {/* mobile navigation */}
                <MobileNav locale={locale} navLinks={navLinks} />
            </div>
        </header>

    )
}
export default HeaderPage