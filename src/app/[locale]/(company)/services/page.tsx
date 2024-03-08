"use client"
import FAQ from "@/src/components/FAQ/FAQ";
import ContantUs from "@/src/components/ContantUs/ContantUs";
import Head from "next/head";
import { useTranslations } from 'next-intl'


const ServicesPage = ({
  params: { locale },
}: {
  params: { locale: string }
}) => {
  const t = useTranslations('ServicesPage')
  const services = [
    { service: t("s1") },
    { service: t("s2") },
    { service: t("s3") },
    { service: t("s4") },
  ]


  return (
    <main className="container overflow-x-hidden pt-8 px-4  lg:px-20  lg:pt-15 antialiased">
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content={t("description")} />
      </Head>
      <h1 className={`${locale === "ar" ? " font-primaryAR" : 'font-primaryEN'} text-3xl font-bold mb-4 `}>{t("title")}</h1>
      <p className={`${locale === "ar" ? " font-secondaryAR" : 'font-secondaryEN'} text-lg mb-8`}>
        {t("servicesText")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          services.map((service, index) => {
            return (
              <div className="bg-white p-4 rounded shadow-md" key={index}>
                <h2 className={`${locale === "ar" ? " font-secondaryAR" : 'font-secondaryEN'} text-xl font-semibold mb-2`}>{service.service}</h2>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
              </div>
            )
          })
        }
      </div>

      <section className='my-28'><FAQ params={{ locale }} /></section>
      <section className='my-28' id='contact-us'>
        <ContantUs params={{ locale }} />
      </section>
    </main>
  );
};

export default ServicesPage;
