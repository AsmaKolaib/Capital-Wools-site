import { FC, ReactNode } from "react";

interface HeadingProps {
    title?: ReactNode;
    subTitle?: string;
    isCentered?: boolean;
    locale?: string;
}

const Heading: FC<HeadingProps> = ({ title, subTitle, isCentered, locale }) => {
    return (
        <>
            <h4 className={`${isCentered ? "text-center" : ""} ${locale === "ar" ? "font-secondaryAR" : "font-secondaryEN"}  mb-2 block text-base lg:text-lg font-semibold text-primary capitalize`}>{subTitle}</h4>
            <h1
                style={{
                    lineHeight: locale === 'ar' ? 1.5 : 'normal'
                }}
                className={` mb-4 text-2xl md:text-3xl lg:text-5xl font-bold text-dar capitalize ${isCentered ? "text-center" : ""} ${locale === "ar" ? "font-primaryAR" : "font-primaryEN"}`}
            >
                {title}
            </h1>
        </>
    );
};

export default Heading;
