"use client"
import { FC } from "react";
import Link from 'next-intl/link';
import { useTranslations } from 'next-intl'

interface LogoProps {
    logoColor?: boolean
    color?: string;
    locale:string
}

const Logo: FC<LogoProps> = ({ color = "text-color", logoColor = true ,locale }) => {
    const t = useTranslations('Logo');
    return (
        <Link href="/" className="flex items-center gap-2 z-50 ">
            <svg width="43" height="50" viewBox="0 0 43 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.4861 14.2076V37.7167L37.0562 33.9204V29.1122L38.4502 30.2328V11.5265L42.4861 14.2076Z" fill={`${logoColor ? "#C2B59B" : "#fff"}`} />
                <path d="M29.3561 23.8441V28.6523L21.6411 23.5146L0 38.0824V14.5697L4.03587 11.8886V30.5948L19.6268 20.0442V10.3099L21.6411 8.97028L23.6627 10.3135V20.046L29.3561 23.8441Z" fill={`${logoColor ? "#C2B59B" : "#fff"}`} />
                <path d="M35.2001 9.00646V17.5966L31.166 14.9154V11.1336L21.6453 4.81009L12.1228 11.1336V22.966L8.08691 25.6472V9.00646L21.6453 0L35.2001 9.00646Z" fill={`${logoColor ? "#C2B59B" : "#fff"}`} />
                <path d="M35.2001 27.7092V40.2494L21.6417 49.2559L8.08691 40.2494V34.5776L12.1228 31.8965V38.1223L21.6453 44.4476L31.166 38.1259V25.028L35.2001 27.7092Z" fill={`${logoColor ? "#C2B59B" : "#fff"}`} />
            </svg>

            <h1 className={`${locale ==="ar" ? " font-primaryAR" : "font-primaryEN"} uppercase ${color} text-lg font-bold tracking-wide px-1`}>
                {t("logo")}
            </h1>

        </Link>
    );
};

export default Logo;