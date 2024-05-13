/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-100': '#3b82f6',
        'background-100': '#27272a',
        'background-200': '#18181b',
        'red': '#CD0000'
  
      }
    },
    
  },
  plugins:
    ['tailwindcss-pseudo-elements'
    ],
}