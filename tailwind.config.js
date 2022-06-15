module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '0',
        sm: '0',
        md: '2rem',
        lg: '6rem',
        xl: '6rem',
        '2xl': '6rem'
      },
    },
    extend: {
      fontFamily: {
        'erica': ['"Erica One"', 'cursive'],
        'gothic': ['"Gothic A1"', 'sans-serif'],
        'kanit': ['"Kanit"', 'sans-serif']
      },
      colors: {
        'teal': '#37677B',
        'purple': '#6E44FF',
        'blue-light': '#E5F7FF',
        'blue': '#D3F1FF',
        'blue-dark': '#AEE4FF'
      }
    },
  },
  plugins: [],
}
