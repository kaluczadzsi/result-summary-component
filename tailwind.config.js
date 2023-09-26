/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        hanken: ['Hanken Grotesk', 'sans-serif'],
      },
      colors: {
        // Primary
        'light-red': 'hsl(0, 100%, 67%)',
        'orangey-yellow': 'hsl(39, 100%, 56%)',
        'green-teal': 'hsl(166, 100%, 37%)',
        'cobalt-blue': 'hsl(234, 85%, 45%)',

        'light-red-o': 'hsla(0, 100%, 67%, 0.1)',
        'orangey-yellow-o': 'hsla(39, 100%, 56%, 0.1)',
        'green-teal-o': 'hsla(166, 100%, 37%, 0.1)',
        'cobalt-blue-o': 'hsla(234, 85%, 45%, 0.1)',
        // Gradients
        'light-slate-blue': 'hsl(252, 100%, 67%)',
        'light-royal-blue': 'hsl(241, 81%, 54%)',
        // circle
        'violet-blue': 'hsla(256, 72%, 46%, 1)',
        'persian-blue': 'hsla(241, 72%, 46%, 0)',
        // Neutral
        'pale-blue': 'hsl(221, 100%, 96%)',
        'light-lavender': 'hsl(241, 100%, 89%)',
        'dark-gray-blue': 'hsl(224, 30%, 27%)',
      },
    },
  },
  plugins: [],
};
