"use client"
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from 'next-intl/link';
import { navLinks } from "@/src/constants/nav-links";
import { useTranslations } from 'next-intl'

const MobileNav = ({
    locale, navLinks
}: {
    locale: string, navLinks: any[]
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleOverlayClick = () => {
        setIsOpen(false); 
    };

    return (
        <>
            <div
                className="flex md:hidden cursor-pointer md:cursor-none z-30"
                onClick={toggleMenu}
            >
                {!isOpen ? <Menu /> : <X />}
            </div>
            {isOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-screen bg-gray-400/10  transition-all "
                    onClick={handleOverlayClick}
                ></div>
            )}
            <figure
                className={`h-screen fixed top-0 px-6 w-[50%] md:w-[30%] border-r border-r-gray-200 bg-[#ffffff] ease-in-out duration-[1s] before:content('') before:top-0 before:left-0 before:w-screen before:h-scree ${isOpen ? locale ==="ar" ? "right-0" : "left-0"   : locale ==="ar" ? "right-[-100%]" : "left-[-100%]" 
                    }`}
            >
                <nav className="w-full h-full flex flex-col justify-center space-y-2 capitalize font-normal tracking-wide">
                    {navLinks.map((link, index) => (
                        <Link key={index} href={`${link.link}`} className={`${locale === "ar" ? " font-primaryAR" : "font-primaryEN"} text-sm lg:text-base font-semibold tracking-wide text-black hover:text-secondary `} >
                            {link.lable}
                        </Link>
                    ))}
                </nav>
            </figure>
        </>
    );
};

export default MobileNav;
