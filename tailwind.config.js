/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#3b5d50',
      'white': '#fff',
      'link': '#adb5bd',
      'gray-400': 'rgb(156 163 175)',
      'gray-500': 'rgb(107 114 128)',
      'gray-600': 'rgb(75 85 99)',
      'gray-700': 'rgb(55 65 81)',
    }
  },
  plugins: [],
}

