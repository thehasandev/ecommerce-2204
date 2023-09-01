/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm': ['DM Sans']
      },
      fontSize: {
        'text25': '25px',
        'text39': '39px',
        'text49': '49px',
      },
      colors: {
        'primary': '#262626',
        'secondary': '#6D6D6D',
        'gray': '#767676',
        'offwhite': '#F0F0F0',
        'ash': '#F0F0F0'
      },
      maxWidth: {
        'container': '1604px',
        '664': '644px',
      }
    },
  },
  plugins: [],
}

