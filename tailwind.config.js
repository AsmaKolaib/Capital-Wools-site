import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1.5rem', // => 24px
      },
      transitionDuration: {
        DEFAULT: '300ms'
      },
      colors: {
        primary: "#0A2A4A",
        secondary: "#C2B59B",
        bgColor:"#F5F7FF"
      },
      fontFamily: {
        primaryEN: ['var(--font-firstES)'],
        secondaryEN: ['var(--font-secondES)'],
        primaryAR: ['var(--font-firstAR)'],
        secondaryAR: ['var(--font-secondAR)'],
      },

    },
  },
  plugins: [],
};
export default config;


