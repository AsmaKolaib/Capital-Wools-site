
"use client"
import React from 'react';
import Button from '@/src/components/Button/Button';
import { useRouter, usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl';



const NotFound = ({ }) => {

 

    const router = useRouter();
    const pathname = usePathname();
    const rootName = pathname.split('/')[1]; // Use router.query to access the dynamic parameter
    const t = useTranslations('NotFoundPage');
    return (
        <section className="container mx-auto h-screen">
            <div className="-mx-4 flex justify-center items-center h-full">
                <div className="w-full flex flex-col justify-center items-center px-4 p-20 max-w-[600px] text-center bg-white shadow-2 shadow-lg">
                    <h1 className="mb-2 font-bold text-secondary text-9xl">
                        404
                    </h1>
                    <h4 className="flex items-center justify-center mb-3 text-[22px] font-semibold leading-tight text-black pb-10 max-w-[400px]">
                        {t("title")}
                    </h4>
                    <div className="flex items-center justify-center">
                        <Button onClickFun={() => { rootName === "ar" ? router.push("/ar") : router.push("/en") }}>
                            {t("buttonText")}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NotFound