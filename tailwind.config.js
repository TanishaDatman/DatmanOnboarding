/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./App.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/@gluestack-ui/**/*.{js,ts,jsx,tsx}", // 👈🏽 important
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  