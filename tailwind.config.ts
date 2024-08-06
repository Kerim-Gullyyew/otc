import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        'xl': '1600px',
      },
    },
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',



        fadeInLeft: 'fadeInLeft 0.6s ease-out forwards',
        fadeInRight: 'fadeInRight 0.6s ease-out forwards',
        fadeInScale: 'fadeInScale 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },



        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },

      fontSize: {
      },
      screens: {
        xs: "500px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
      backgroundImage: {

      },
      boxShadow: {
        'custom-light': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'custom': '10px -10px 0 #ffff',
        'custom-bottom': '10px 10px 0 #ffff',
      },

      colors: {
        background: "#FFF7D4",
        primary: "#FCDC2A",
        textPrimary: "#C07F00",
        icon: "#9ca3af",   //gray-400
        border: "#e5e7eb", //gray-200
        // green: "#219C90",
        // yellow: "#FCDC2A",
        // blue: "#3FA2F6",
      },
    },
  },
  plugins: [

  ],
};
export default config;
