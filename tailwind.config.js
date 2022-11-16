/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "sans-serif"],
      },
      colors: {
        primary: "#1F2937",
        gray: "#E5E7EB",
        ORMblue: "#05324e",
        ORMend: "#064063",
        spotifyGreen: "#1ED761",
        applePodcastsPurple: "#D56DFB",
        youtubeRed: "#ff0000",
        instagramColor: "#C13584",
        tiktokColor: "#69C9D0",
        cardBg: "#015A66",
        blueBg: "#F0EBE3",
        grayBg: "#D8D2CB",
      },
    },
  },
  plugins: [],
}
