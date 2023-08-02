/** @type {import('tailwindcss').Config} */
module.export = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        minga1: "black",
        minga2: "#f9a8d4"
      },
      backgroundColor: {
        minga1: "f9a8d4",
        minga2: "black"
      }
    }
  },
  variants: {},
  plugins: {}
}

