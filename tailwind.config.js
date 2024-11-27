/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT(
  {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        animation: {
          'reverse-spin': 'reverse-spin 20s linear infinite',
        },
        keyframes: {
          'reverse-spin': {
            from: { transform: 'rotate(0deg)' },
            to: { transform: 'rotate(-360deg)' },
          },
        },
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
        },
      },
    },
    plugins: [],
  }
)
