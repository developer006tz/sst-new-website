/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#E6EAF3',
          200: '#BCC7E0',
          300: '#93A4CD',
          400: '#6981BA',
          500: '#2B4580',
          DEFAULT: '#3C5FAA',
        },
        secondary: {
          100: '#EBF7F9',
          200: '#C7EAF0',
          300: '#A3DDE6',
          400: '#75CBD8',
          500: '#4FA6B3',
          DEFAULT: '#75CBD8',
        },
        light: {
          100: '#CBCBCB',
          200: '#D9D9D9',
          300: '#E0E0E0',
          400: '#F5F5F5',
          500: '#F5F5F5',
          DEFAULT: '#FFFFFF',
        },
        dark: {
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
          950: "#060617",
          DEFAULT: '#212121',
        },
        sst: {
          DEFAULT: '#ffffff0d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        'base': '16px',
        'header': ['36px', {
          lineHeight: '1.2',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        }],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        'lg': '1rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

