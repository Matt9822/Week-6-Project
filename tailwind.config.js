/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".white": {
          "@apply text-white text-sm": {},
        },
        ".primary-header": {
          "@apply z-10 sticky top-0 bg-gradient-to-t from-transparent to-black": {},
        },
        ".primary-header.sticking": {
          "@apply bg-black sticky top-0": {},
        },
        "rotate": {
          "@apply rotate-180": {},
        },
      });
      addUtilities({
        '.scrollbar-hide': {
          /* Hide scrollbar for WebKit browsers */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* Hide scrollbar for other browsers */
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
      });
    }),
  ],
};
