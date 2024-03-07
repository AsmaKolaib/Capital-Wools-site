"use client"
import React, { useState } from "react";
import axios from 'axios';
import { useFormik } from "formik";
import { contactShema } from "./contactSchema"
import Button from "../Button/Button";
import { useTranslations } from 'next-intl'
const Index = ({
     locale 
}: {
     locale: string 
}) => {
    const t = useTranslations('ContactUs')
    const [formData, setFormData] = useState({
        yourName: "",
        yourPhone: "",
        yourEmail: "",
        yourMessage: "",
    })
    const [loader, setLoader] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const onSubmit = async (values: any, helpers: any) => {
        setLoader(true);
        // console.log("Form Submitted", values, "helpers", helpers);
        try {
            const formData = new FormData();
            formData.append('yourName', values.yourName);
            formData.append('yourPhone', values.yourPhone);
            formData.append('yourEmail', values.yourEmail);
            formData.append('yourMessage', values.yourMessage);

            const response = await axios.post(
                'https://dashboard.capitalwools.com/wp-json/contact-form-7/v1/contact-forms/7/feedback',
                formData
            );
            console.log('Message sent successfully!');
            setLoader(false);
            setMessage('Message sent successfully!');
            helpers.resetForm();
        } catch (error) {
            console.error('Error sending message:', error);
            setLoader(false);
            setError('Failed to send message. Please try again.');
        }
    };
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
        useFormik({
            initialValues: formData,
            validationSchema: contactShema,
            onSubmit,
        });

    return (
        <div className="w-full lg:px-8">
            <div className="relative bg-white p-8 shadow-lg  lg:p-12">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 ">
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="yourName"
                                className=" text-lg font-semibold leading-6 text-gray-900 inline-block"
                            >
                             {t("name")}
                            </label>
                            <div className="mt-1">
                                <input
                                    value={values.yourName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="text"
                                    name="yourName"
                                    id="yourName"
                                    autoComplete="given-name"
                                    placeholder={t("yourName")}
                                    className="w-full  border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="yourPhone"
                                className="inline text-lg font-semibold leading-6 text-gray-900 "
                            >
                               {t("PhoneNumber")}
                            </label>
                            {errors.yourPhone && touched.yourPhone && (
                                <p className=" inline-block  text-red-600 ml-4 ">
                                    {errors.yourPhone}
                                </p>
                            )}
                            <div className="mt-1">
                                <input
                               
                               dir={locale === "ar" ? "rtl" : "ltr"}
                                    value={values.yourPhone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="tel"
                                    name="yourPhone"
                                    id="yourPhone"
                                    autoComplete="tel"
                                    placeholder={t("exPhone")}
                                    className={`  w-full  border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary ${errors.yourPhone && touched.yourPhone
                                        ? "border-l-8 border-red-600 focus:ring-0 inline"
                                        : ""
                                        }`}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="yourEmail"
                                className=" text-lg font-semibold leading-6 text-gray-900 inline-block "
                            >
                               {t("email")}
                            </label>
                            {errors.yourEmail && touched.yourEmail && (
                                <p className="text-red-600 ml-4 inline-block	">
                                    {errors.yourEmail}
                                </p>
                            )}
                            <div className="mt-1">
                                <input
                                    value={values.yourEmail}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="email"
                                    name="yourEmail"
                                    id="yourEmail"
                                    autoComplete="email"
                                    placeholder={t("yourEmail")}
                                    className={`w-full  border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary ${errors.yourEmail && touched.yourEmail
                                        ? "border-l-8 border-red-600 focus:ring-0"
                                        : ""
                                        }`}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label
                                htmlFor="yourMessage"
                                className=" text-lg font-semibold leading-6 text-gray-900 "
                            >
                                   {t("message")}
                            </label>
                            <div className="mt-1">
                                <textarea
                                    value={values.yourMessage}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="yourMessage"
                                    id="yourMessage"
                                    rows={4}
                                    placeholder= {t("yourMessage")}
                                    className="w-full resize-none  border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary "
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <Button status={loader} typeBtn="submit"
                        >{t("send")}</Button>
                        {message && (
                            <p className="block text-base  lg:text-lg mt-4 text-green-600">{message}</p>
                        )}
                        {error && (
                            <p className="block text-base lg:text-lg mt-4 text-red-600">{error}</p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Index;


