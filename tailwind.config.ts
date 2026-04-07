import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0E567B',
          dark: '#050B49',
          light: '#90C0E7',
        },
        accent: {
          DEFAULT: '#4BA2FF',
          aqua: '#00E3FF',
          'aqua-gray': '#7EC6DE',
        },
        text: {
          DEFAULT: '#050B49',
          light: '#4A4A68',
          inverse: '#FFFFFF',
        },
        bg: {
          DEFAULT: '#FFFFFF',
          alt: '#F8F9FA',
          neutral: '#E6E6E6',
        },
        border: '#D3DCDF',
        success: '#4BA2FF',
        error: '#C0062B',
        warning: '#FFD600',
      },
      fontFamily: {
        sans: ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Roboto', 'sans-serif'],
        body: ['Roboto', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
