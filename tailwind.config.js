// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        holiday: {
          pine: '#2F4538',
          gold: '#BFA181',
          snow: '#F7F7F7',
          berry: '#A0522D',
          frost: '#E8EEF2',
          red: '#B83A3A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}