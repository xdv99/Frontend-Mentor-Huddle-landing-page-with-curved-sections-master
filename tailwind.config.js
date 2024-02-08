/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
    colors: {
      "pink": "hsl(322, 100%, 66%)",
      "lighPink": "hsl(321, 100%, 78%)",
      "lighRed": "hsl(0, 100%, 63%)",
      "veryDarkCyan": "hsl(192, 100%, 9%)",
      "veryPaleBlue": "hsl(207, 100%, 98%)",
      "white": "#ffffff",
      "black": "#000000",
    },
    fontFamily: {
      "heading": "Poppins",
      "body": "Open Sans"
    }
  },
  plugins: [],
  "scripts": {
    "watch": "npx tailwindcss -i ./src/input.css -o ./src/output.css --watch"
  }
}

