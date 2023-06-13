/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
        screens: {
      'sm': '550px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1250px',
      
  
    },
    extend: {
     
    
     
      colors: {
        "primary": {
          100:  "rgb(215,186,137)" ,
          200:  "rgb(215,186,137)" ,
          300:  "rgb(215,186,100)" ,
          },
        "secondary": {
          100: " rgb(25,34,49)",
          200: " rgba(32, 43, 61,.9)",
          300: "rgba(42, 57, 80,.7) ",
        } ,
        "tertiary": {
          100: " rgb(250,250,244)",
          200: " rgb(230, 227, 227)",
          300: "rgb(64,74,66) ",
        } ,
        
      },
      
      fontFamily: {
        "cinzel": [ "Cinzel", "serif" ] ,
        "lato": [ "Lato", "serif" ] 
        
      },
      

      
    },
  },
  plugins: [
  ],
}

