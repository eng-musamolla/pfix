import type { Config } from "tailwindcss";
 
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const addVariablesForColors = ({ addBase, theme }: any) => {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
};

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  // purge: {
  //   enabled: process.env.NODE_ENV === 'production',
  //   content: [
  //     './components/**/*.{js,ts,jsx,tsx}', 
  //     './pages/**/*.{js,ts,jsx,tsx}'
  //   ],
  // },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      "animation": {
        shimmer: "shimmer 2s linear infinite"
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(-13deg)' },
          '50%': { transform: 'rotate(13deg)' },
          '100%': { transform: 'rotate(-13deg)' },
        },
        shimmer: {
          from: {
            "backgroundPosition": "0 0"
          },
          to: {
            "backgroundPosition": "-200% 0"
          }
        }
      },
  
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
    },
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#f6d860",
          "secondary": "#f6d860",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [
    require('daisyui'),
    addVariablesForColors,
  ],
};

export default config;
