'use client'
import Footer from '@/src/components/Footer/Footer'
import Header from "@/src/components/Header/header";

const CompanyLayout = ({ children, params: { locale } }: { children: React.ReactNode, params: { locale: string } }) => {
    console.log("params", locale);

    return (
        <>
            <Header locale={locale} />
            <main className='mt-24'>

                {children}

            </main>
            <Footer locale={locale} />
        </>
    )
}

export default CompanyLayout