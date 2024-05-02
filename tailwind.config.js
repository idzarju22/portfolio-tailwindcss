// @type {import('tailwindcss').Config} 
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center : true,
      padding : '16px',
    },
    extend: {
      colors : {
        primary : '#0ea5e9',
        secondary :'#7dd3fc',
        dark : '#020617',

      },
      screens :{
        '2xl' :'1320px',
      }
    },
  },
  plugins: [],
}

