import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-pink": "#FF1493",
        "primary-blue": "#5D9CEC",
        "primary-purple": "#8251B9",
        "heading-purple": "#B300FF",
      },
    },
  },
  plugins: [],
} satisfies Config;
