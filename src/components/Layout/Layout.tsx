import Header from '../Header/header'
import Footer from '../Footer/Footer'
import RootLayout from '@/app/layout';
import localFont from "next/font/local"
import "@/app/globals.css";
import ScrollToTopButton from '../Button/ToUp';
import { ReactNode } from 'react';

// Define the ES first font
const firstFontES = localFont({
    src: '../../../public/fonts/Helvetica.ttf',
    variable: "--font-firstES",
    fallback: ["'roboto'", "'open sans'", "'sans-serif'"],
});

// Define the ES second font
const secondFontES = localFont({
    src: '../../../public/fonts/Helvetica-light.ttf',
    variable: '--font-secondES',
    fallback: ["'roboto'", "'open sans'", "sans-serif"],
});

// Define the AR first font
const firstFontAR = localFont({
    src: '../../../public/fonts/ArbFONTS-Bold.ttf',
    variable: "--font-firstAR",
    fallback: ["'roboto'", "'open sans'", "'sans-serif'"],
});

// Define the AR second font
const secondFontAR = localFont({
    src: '../../../public/fonts/ArbFONTS-Light.ttf',
    variable: '--font-secondAR',
    fallback: ["'roboto'", "'open sans'", "sans-serif"],
});
interface LayoutProps {
    children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
    return (
        <div className={`${firstFontES.variable} ${secondFontES.variable} ${firstFontAR.variable} ${secondFontAR.variable} text-black text-lg min-h-screen overflow-x-hidden`}>
            <Header />
            {children}
            <Footer />
        </div >
    )
}


