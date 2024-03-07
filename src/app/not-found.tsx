"use client"
import React from 'react'
import "./style.css";
import Button from '@/src/components/Button/Button';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl'
export default function NotFound() {
  const route = useRouter();
  return (
    <html lang='en' >
      <body>

        <section className="container mx-auto h-screen">
          <div className="-mx-4 flex justify-center items-center h-full">
            <div className="w-full flex flex-col justify-center items-center px-4 p-20 max-w-[600px] text-center bg-white shadow-2 shadow-lg  ">
              <h1 className="mb-2 font-bold text-secondary text-9xl ">
                404
              </h1>
              <h4 className=" flex items-center justify-center mb-3 text-[22px]  font-semibold leading-tight text-black pb-10 max-w-[400px]">
                Oops! The page you are looking for could not be found.
              </h4>
              <div className="flex items-center justify-center ">
                <Button onClickFun={() => { route.push("/") }} > Go back to Home</Button>
              </div>
            </div>
          </div>
        </section>
      </body>
    </html>

  )
}