/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  important: true,

  content: ["./src/**/*.{js,jsx,ts,tsx}" ,  flowbite.content()
  ] ,
  theme: {
    fontFamily: {
      "Vazir-Bold-Font": "Vazir-Bold" ,
      
      'Vazir-Regular-Font' : "Vazir-Regular"
    },
    extend: {
      colors: {
        // Using modern `rgb`
        whiteColor: "var(--white-color)",
        white50Color: "var(--white50-color)",
        blueColor: "var(--blue-color)",
        inputBgColor: "var(--inputBgColor)"
      },
    },
  },
  plugins: [flowbite.plugin()
  ],
};
