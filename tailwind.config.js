/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable manual dark mode toggle
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // The standard font for high-end tech
      },
      colors: {
        bg: {
          light: "#FAFAFA", // Zinc-50
          dark: "#09090B",  // Zinc-950 (Deep void black)
        },
        card: {
          light: "#FFFFFF",
          dark: "#18181B", // Zinc-900
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
