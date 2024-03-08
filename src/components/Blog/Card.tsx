import React, { FC } from 'react';
import Link from 'next-intl/link';
import Image from 'next/image';


interface BlogCardProps {
  date: string;
  CardTitle: string;
  CardDescription?: string;
  image: string;
  slug : string;
  locale?: string;
}

const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
};




const BlogCard: FC<BlogCardProps> = ({ image, date, CardTitle, CardDescription,slug ,locale }) => {
  const formattedDate = formatDate(date);

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
      <div className="mb-10 w-full bg-white p-3 py-6 shadow-2 hover:shadow-lg ">
        <div className="mb-4 overflow-hidden ">
          <img src={image} alt="" width={400} height={400} className="w-full h-60 object-cover object-center" />
        </div>
        <div className="p-4">
          {formattedDate && (
            <span className="mb-3 inline-block bg-bgColor text-primary px-4 py-1 text-center text-xs font-semibold leading-loose ">
              {formattedDate}
            </span>
          )}
          <h3>
            <Link
              href={`/blog/${slug}`}  locale={locale}
              className="mb-3 inline-block text-xl font-semibold  hover:text-secondary  sm:text-2xl lg:text-xl xl:text-2xl"
            >
              {CardTitle}
            </Link>
          </h3>
          <div dangerouslySetInnerHTML={{ __html: CardDescription }} className="text-base text-body-color modernWay" /> {/* Render raw HTML safely */}
        </div>
      </div> 
    </div>
  );
};


export default BlogCard;
