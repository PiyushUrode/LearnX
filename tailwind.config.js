/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titillium: ['TitilliumWeb', 'sans-serif'],
      },

      colors: {
        paragraph: '#C7C7C7',
      },
      screens: {
        // Reuse Tailwind's default breakpoints
        am: '400px',
        sm:  '550px',  
        md:  '768px' , 
        lg:  '1024px', 
        xl:  '1280px',
      },

      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(255,187,0,1) 0%, rgba(255,224,156,1) 50%, rgba(255,187,0,1) 100%)',
      },
      borderImage: {
        'custom-gradient1': 'linear-gradient(90deg, rgba(255,187,0,1) 0%, rgba(255,224,156,1) 50%, rgba(255,187,0,1) 100%)',   },

        animation: {
          wave: 'wave-animation 1s infinite linear, loading-animation 10s infinite linear alternate',
        },
        keyframes: {
          'wave-animation': {
            '0%': { 'background-position': '0 bottom' },
            '100%': { 'background-position': '200px bottom' },
          },
          'loading-animation': {
            '0%': { 'background-size': '200px 0px' },
            '100%': { 'background-size': '200px 200px' },
          },
        },

    },
  },
  plugins: [],
}