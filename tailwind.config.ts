import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(-13deg)' },
          '50%': { transform: 'rotate(13deg)' },
          '100%': { transform: 'rotate(-13deg)' },
        }
      },
      animation: {
        rotate: 'rotate 2s ease-in-out infinite',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
