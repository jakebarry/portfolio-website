/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', "./src/**/*.{jsx,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'serif'],
      },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
        },
        animation: {
          fadeIn: 'fadeIn 1.5s ease-in-out', // Customize duration and easing as needed
        },
      }
    },
  plugins: [],
}

