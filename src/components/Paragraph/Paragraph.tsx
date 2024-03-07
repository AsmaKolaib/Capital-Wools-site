import { FC } from "react";

interface ParagraphProps {
    text: string,
    isCentered?: boolean,
    styling?: string,
    locale? :string
}

const Paragraph: FC<ParagraphProps> = ({ text, isCentered, styling, locale }) => {
    return (
        <p className={` ${locale ==="ar" ? " font-secondaryAR  " : "font-secondarEN"} text-sm md:text-base lg:text-lg text-body-color ${styling}`}>
            {text}
        </p>
    );
};

export default Paragraph;