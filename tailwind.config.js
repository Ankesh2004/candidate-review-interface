/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': 'rgb(248,249,250)',
        'foreground': 'rgb(255, 255, 255)',
        'primary-text': 'rgb(45, 55, 72)',
        'secondary-text': 'rgb(113, 128, 150)',
        'hover-layer': 'rgb(210, 210, 210)',
        'button': 'rgb(79,209,197)',
        'progress-green': 'rgb(46,189,89)',
        'progress-red': 'rgb(224,0,0)',
        'progress-yellow': 'rgb(236,178,46)',
      },
      fontSize: {
        'h1': '1.5rem', // 32px
        'h2': '1.2rem', // 24px
        'p': '0.9rem', // 16px
      },
    },
  },
  plugins: [],
}