/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif"],
        popin: ["Poppins", "ui-sans-serif"],
        pod: ["Podkova", "ui-sans-serif"],
        frank: ["Frank Ruhl Libre", "ui-sans-serif"],
      },
      fontSize: {
        heading: "64px",
        twentyFour: "24px",
      },
      colors: {
        "regal-blue": "#243c5a",
        bannerColor: "#FAE3B6",
        bannerBtnHover: "#FDBB57",
        bannerBtnBoarder: "#FFD687",
        bannerBtnbg:
          " 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 4px 4px 4px 0px #F2D09B inset",
      },
      spacing: {
        container: "1320px",
        thirty: "30px",
        twentySeven: "27px",
      },
    },
  },
  plugins: [],
};
