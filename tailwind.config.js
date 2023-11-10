/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#11121A',
        'hoverColor':'#9764BF',
        'pColor':'#fff',
        'hColor':'#fff',
        'textColor':'#9764BF',
        'cardBg' : '#1D1C26',
        'cardP': '#8F9BB7',
        'faqBg':'#1D1C26',
        'faqP':'#8F9BB7'

      },
      logo:{
        'navbar': "url('/logo.svg')",
      },
      images:{
        'hero': "url('/hero.svg')",
        'integrations': "url('/integrations.png')",
        
      },
      fontSize: {
        'h2': '58px',
        'p':'18px',
        'h4':'24px',
        'p1':'16px',
        'h3':'30px',
        'p2':'12px'
        
        // ...
      },
      screens: {
        'xs': '300px',
        // => @media (min-width: 320px) {... }
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
};


