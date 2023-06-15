/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/bg.jpg')",
      },
      colors: {
        'primary-400':'#ffb703',
        'primary-500': '#fb8500',
        'secondary-300': '#8ecae6',
        'secondary-400': '#219ebc',
        'secondary-500': '#023047',
      },
      gridTemplateColumns: {
        'app':'300px 1fr' 
      },
    },
  },
  plugins: [],
}
