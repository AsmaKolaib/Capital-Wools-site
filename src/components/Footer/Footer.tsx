"use client"
import React, { ReactNode } from "react";
import Image from "next/image";
import Logo from "@/src/components/Logo/Logo"
import Facebook from "../../../public/images/Facebook.svg"
import Linkedin from "../../../public/images/Linkedin.svg"
import X from "../../../public/images/X.svg"
// import { footerColumns } from "@/src/constants/footer-links";
import Link from 'next-intl/link';
import { useTranslations } from 'next-intl'
import {  usePathname } from 'next/navigation'
interface FooterLink {
  label: string;
  link: string;
}
export interface FooterColumn {
  title: string;
  links: FooterLink[];
}



const Footer = ({
 locale ,
}: {
 locale: string 
}) => {
  const pathname = usePathname();
  const rootName = pathname.split('/')[1];
  const t = useTranslations('footer');
  const footerColumns: FooterColumn[] = [
    {
      title: t("Company"),
      links: [
        { label: t("home"), link: '/' },
        { label: t("services"), link: 'services' },
        { label: t("products"), link: 'products' },
        { label: t("blog"), link: 'blog' },
        { label: t("aboutUs"), link: 'about-us' },
      ]
    },
    {
      title: t("Support"),
      links: [{ label: t("FAQ"), link: 'FAQ' }, { label: t("ContactUs"), link: '#contact-us' }],
    },
  ];
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    <Image key="1" src={Facebook} alt="logo capital wools " width={10} height={10} className="social-link" />,
    <Image key="2" src={X} alt="logo capital wools " width={20} height={20} className="social-link" />,
    <Image key="3" src={Linkedin} alt="logo capital wools " width={20} height={20} className="social-link" />,
  ];
  return (
    <>
      <footer className={`${locale ==="ar" ? " font-secondaryAR" : "font-primaryEN"} pt-20 pb-10 bg-black `} >

        {/* Links */}
        <div className="container mb-6 lg:mb-12 flex flex-col lg:flex-row">
          <div className="basis-1/3 flex flex-col lg:items-start gap-4 lg:gap-6">
            <Logo  locale={locale} color="text-white" logoColor={false} />
            <p className={`${locale ==="ar" ? " font-secondaryAR pl-8" : "font-primaryEN pr-5"} text-sm md:text-base lg:text-lg text-gray-200  `}>
              {t("footerText")}
            </p>
            <ul className="flex md:hidden items-center gap-4 lg:gap-6 mb-6 lg:mb-0 ">
              {socialLinks.map((link, index) => (
                <li key={index} className="cursor-pointer  ">
                  {link}
                </li>
              ))}
            </ul>
          </div>
          <div className="basis-2/3 grid grid-cols-2 lg:grid-cols-4 lg:pt-0 lg:ps-8  ">
            {footerColumns.map((col, index) => (
              <div
                key={index}
                className="capitalize flex flex-col  lg:text-start lg:pl-10 pt-4"
              >
                <h2 className={`${locale ==="ar" ? " font-secondaryAR" : "font-primaryEN"} font-bold text-sm md:text-base lg:text-lg text-slate-100 mb-6`}>
                  {col.title}
                </h2>
                <ul>
                  {col.links.map((item, index) => (
                   <Link key={index} href={`${item.link}`}>
                      <li
                        key={index}
                        className=" font-light text-sm lg:text-base pb-2  text-gray-300  hover:text-secondary hover:ps-1 transition-all cursor-pointer"
                      >
                        {item.label}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
            <div className=" w-full h-60 lg:h-full col-span-2 pt-4 lg:pt-0 ">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.8013941719837!2d46.711750175830474!3d24.63052915441872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f05a41b863d75%3A0x9ab68ab1ac406852!2z2LTYsdmD2Kkg2KPYtdmI2KfZgSDYp9mE2LnYp9i12YXYqSDZhNmE2KrYrNin2LHYqQ!5e0!3m2!1sen!2s!4v1707641691720!5m2!1sen!2s" width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        {/* Links */}
        {/* Copyrights */}
        <div className={`${locale ==="ar" ? " font-secondaryAR" : "font-primaryEN"} container text-gray-300 text-sm `}>
          <div className="flex flex-row justify-between items-center border-t border-slate-700 pt-2">
            <p className=" capitalize text-center lg:text-start ">
              {`© ${currentYear}`}{t("copyRight")}
            </p>
            <ul className=" hidden md:flex items-center  gap-4 lg:gap-6  lg:mb-0  ">
              {socialLinks.map((link, index) => (
                <li key={index} className="cursor-pointer ">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Copyrights */}
      </footer></>
  );
};

export default Footer;
