export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      none: '0',
      sm: '2px',
      DEFAULT: '4px',
      md: '4px',
      lg: '4px',
      full: '9999px',
    },
    extend: {
      colors: {
        cremp: {
          primary: '#6B82B5',
          'primary-light': '#829AC5',
          secondary: '#2A3A69',
          'secondary-light': '#1F2A4A',
          accent: '#C79A17',
          'accent-dark': '#D7B73F',
          'accent-light': '#D7B73F',
          orange: '#F27052',
          'orange-light': '#FFF4E5',
          navy: '#2A3A69',
          surface: '#ffffff',
          background: '#F5F7FA',
          'surface-alt': '#F5F7FA',
          border: '#E2E6EE',
          'text-primary': '#0D1733',
          'text-secondary': '#3A4566',
          'text-muted': '#6B7491',
        },
        success: {
          DEFAULT: '#16A34A',
          light: '#DCFCE7',
          surface: '#F0FDF4',
        },
        info: {
          DEFAULT: '#1D4ED8',
          light: '#DBEAFE',
          surface: '#EFF6FF',
        },
        warning: {
          DEFAULT: '#C79A17',
          light: '#FFF4E5',
          surface: '#FFFBEB',
        },
        error: {
          DEFAULT: '#DC2626',
          light: '#FEE2E2',
          surface: '#FEF2F2',
        },
      },
      fontFamily: {
        sans: ['Outfit'],
      },
      boxShadow: {
        'elevation-1': '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)',
        'elevation-2': '0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06)',
        'elevation-3': '0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)',
        'elevation-4': '0 20px 25px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.04)',
        'glow-accent': '0 0 20px rgba(199,154,23,0.3)',
        'glow-primary': '0 0 20px rgba(107,130,181,0.3)',
        'glow-orange': '0 0 20px rgba(242,112,82,0.2)',
        'inner-glow': 'inset 0 1px 0 rgba(255,255,255,0.1)',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-left': {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-right': {
          from: { opacity: '0', transform: 'translateX(20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'shimmer': {
          from: { backgroundPosition: '-200% 0' },
          to: { backgroundPosition: '200% 0' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'marquee': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in-down': 'fade-in-down 0.6s ease-out forwards',
        'fade-in-left': 'fade-in-left 0.6s ease-out forwards',
        'fade-in-right': 'fade-in-right 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.3s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'marquee': 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}
