/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {},
      fontFamily: {
        heading: ['"anek-latin-variable"', 'sans-serif'],
        body: ['"aileron"', 'sans-serif'],
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
}

