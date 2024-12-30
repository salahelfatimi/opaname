/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      screens: {
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
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    extend: {
      colors: {
        primary: '#F76708', // Add your custom color (e.g., orange)
        secondary: '#1E1E1E', // Add another custom color (e.g., dark gray)
        accent: '#FFD700', // Add an accent color (e.g., gold)
        light: '#F5F5F5', // Add a light background color
      },
      keyframes: {
        spin: {
          to: {
            transform: "rotate(360deg)",
          },
        },
      
      },
      animation: {
        spin: "spin 20s linear infinite",
       
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements' })],
};
