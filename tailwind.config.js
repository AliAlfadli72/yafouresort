export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    // Force-generate all forest green classes to prevent resolution failure
    { pattern: /bg-forest-(50|100|200|300|400|500|600|700|800|900)/ },
    { pattern: /text-forest-(50|100|200|300|400|500|600|700|800|900)/ },
    { pattern: /border-forest-(50|100|200|300|400|500|600|700|800|900)/ },
    // Gold classes
    { pattern: /bg-gold-(100|200|300|400|500|600|700|800|900)/ },
    { pattern: /text-gold-(100|200|300|400|500|600|700|800|900)/ },
    { pattern: /border-gold-(100|200|300|400|500|600|700|800|900)/ },
    // Ivory classes
    { pattern: /bg-ivory-(100|200|300|400|500|600)/ },
    { pattern: /text-ivory-(100|200|300|400|500|600)/ },
    { pattern: /border-ivory-(100|200|300|400|500|600)/ },
    // Charcoal classes
    { pattern: /text-charcoal-(50|100|400|600|700|800|900)/ },
    { pattern: /bg-charcoal-(50|100|400|600|700|800|900)/ },
  ],
  theme: {
    extend: {
      colors: {
        // ====== Yafour Ultra-Luxury Palette ======
        // Forest Green — Nature & Serenity
        forest: {
          50:  '#f0f5f1',
          100: '#d8e8db',
          200: '#aecdb6',
          300: '#7aad87',
          400: '#4d8e5e',
          500: '#2d6a4f',  // Main Forest Green
          600: '#1B3022',  // Brand Primary (Forest Green)
          700: '#162a1d',
          800: '#102218',
          900: '#0a1810',
        },
        // Gold — Luxury & Royalty
        gold: {
          100: '#fdf6dc',
          200: '#f9e89a',
          300: '#f2d35c',
          400: '#E8C840',  // Highlights
          500: '#D4AF37',  // Primary Gold Accent (Champagne Gold)
          600: '#C09020',  // Hover
          700: '#A68A1C',  // Dark Accents
          800: '#7A6414',
          900: '#4a3c0c',
        },
        // Ivory — Elegance & Space
        ivory: {
          100: '#FFFFFF',
          200: '#F9F9F9',  // Primary Background
          300: '#FAF7F2',  // Warm Ivory
          400: '#F5F0E8',  // Section Backgrounds
          500: '#EDE7D9',  // Mid Sections
          600: '#D5CCBA',  // Borders
        },
        // Charcoal — Typography
        charcoal: {
          50:  '#F8F8F8',
          100: '#EBEBEB',
          400: '#9B9B9B',
          600: '#6B6B6B',
          700: '#4A4A4A',
          800: '#1C1C1C',  // Main Text
          900: '#0D0D0D',  // Headings
        },
      },
      fontFamily: {
        heading:  ['Tajawal', 'Playfair Display', 'serif'],
        body:     ['Cairo', 'Inter', 'sans-serif'],
        ar:       ['Tajawal', 'sans-serif'],
        en:       ['Playfair Display', 'serif'],
        inter:    ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'luxury':     '0 10px 40px -10px rgba(212, 175, 55, 0.2)',
        'luxury-lg':  '0 20px 60px -15px rgba(212, 175, 55, 0.25)',
        'green-deep': '0 10px 40px rgba(27, 48, 34, 0.3)',
        'card':       '0 4px 24px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 12px 48px rgba(27, 48, 34, 0.12)',
        'glass':      '0 8px 32px rgba(0, 0, 0, 0.12)',
      },
      backgroundImage: {
        'gradient-gold':     'linear-gradient(135deg, #D4AF37 0%, #A68A1C 100%)',
        'gradient-forest':   'linear-gradient(135deg, #1B3022 0%, #2d6a4f 100%)',
        'gradient-luxury':   'linear-gradient(to bottom right, #1B3022, #2d4a35)',
        'gradient-ivory':    'linear-gradient(135deg, #FAF7F2, #F5F0E8)',
      },
      animation: {
        'cinematic-zoom':   'cinematic-zoom 22s ease-out infinite alternate',
        'float':            'float-gentle 4s ease-in-out infinite',
        'shimmer':          'shimmer 2.5s infinite',
        'pulse-gold':       'pulse-gold 2.5s ease-in-out infinite',
        'fade-up':          'fade-up 0.8s ease-out forwards',
      },
      keyframes: {
        'cinematic-zoom': {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(1.07)' },
        },
        'float-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 8px rgba(212,175,55,0.3)' },
          '50%': { boxShadow: '0 0 24px rgba(212,175,55,0.6)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      letterSpacing: {
        'luxury': '0.15em',
        'ultra': '0.25em',
      },
    },
  },
  plugins: [],
}
