export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cremp: {
          primary: '#3B1E54',
          'primary-light': '#5A3478',
          secondary: '#0f1f3d',
          'secondary-light': '#1c2a44',
          accent: '#d4af37',
          'accent-dark': '#b38728',
          'accent-light': '#bf953f',
          orange: '#E55B13',
          'orange-light': '#FFF4E5',
          navy: '#0B1426',
          surface: '#ffffff',
          background: '#f8f9fb',
          'surface-alt': '#f0f2f5',
          border: '#e4e7ec',
          'text-primary': '#0B1426',
          'text-secondary': '#4A5568',
          'text-muted': '#9199a8',
        },
        success: {
          DEFAULT: '#166534',
          light: '#DCFCE7',
          surface: '#F0FDF4',
        },
        info: {
          DEFAULT: '#1D4ED8',
          light: '#DBEAFE',
          surface: '#EFF6FF',
        },
        warning: {
          DEFAULT: '#E55B13',
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
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'elevation-1': '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)',
        'elevation-2': '0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06)',
        'elevation-3': '0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)',
        'elevation-4': '0 20px 25px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.04)',
        'glow-accent': '0 0 20px rgba(212,175,55,0.3)',
        'glow-primary': '0 0 20px rgba(59,30,84,0.3)',
        'glow-orange': '0 0 20px rgba(229,91,19,0.2)',
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
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}
