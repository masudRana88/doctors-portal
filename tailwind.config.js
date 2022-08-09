
/** @type {import('tailwindcss').Config} */
module.exports = {  
  content: ["./src/**/*.{js,jsx,ts,tsx}",'./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      backgroundSize:{
        "small" : "192px 100px"
      },
      backgroundImage:{
        bannerBG : "url(./images/images/bg.png)",
        appointmentBG : "url(./images/images/appointment.png)",
        testimonialBG : "url(./images/icons/quote.svg)",
        footerBG : "url(./images/images/footer.png)",
      },
      boxShadow: {
        'cardShadow': '3px 4px 10px 2px rgba(0, 0, 0, 0.05)',
      },
      colors:{
        bgGray: "#3A4256",
        bgGreenL: "rgba(25, 211, 174, 1)",
        bgGreenR: "rgba(15, 207, 236, 1)",
        textColorH: "#3A4256",
        footerH: "#939393",
        footerT: "#3A4256",
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
