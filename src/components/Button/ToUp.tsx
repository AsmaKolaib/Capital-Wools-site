"use client"
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className=" container m-auto   w-full justify-between   ">
    <div className="fixed container  m-auto right-0  bottom-20 z-50 flex justify-end  ">
      <button
        type="button"
        onClick={scrollToTop}
        className={` 
       m transition-opacity 

          ${isVisible ? "opacity-100" : "opacity-0"}
    `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="86"
          // height="86"
          width="50"
          height="50"
          viewBox="0 0 86 86"
          fill="none"
          className="transform rotate-45"
        >
          <circle cx="43" cy="43" r="43" fill="#181818" />
          <path
            d="M51.5858 54.4142C52.3668 55.1953 53.6332 55.1953 54.4142 54.4142C55.1953 53.6332 55.1953 52.3668 54.4142 51.5858L51.5858 54.4142ZM32 30C30.8954 30 30 30.8954 30 32L30 50C30 51.1046 30.8954 52 32 52C33.1046 52 34 51.1046 34 50L34 34L50 34C51.1046 34 52 33.1046 52 32C52 30.8954 51.1046 30 50 30L32 30ZM54.4142 51.5858L33.4142 30.5858L30.5858 33.4142L51.5858 54.4142L54.4142 51.5858Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
    </div>
  );
};

export default ScrollToTop;