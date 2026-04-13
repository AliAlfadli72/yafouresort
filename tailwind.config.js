export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Luxury White Mode Palette
        ivory: {
          200: "#FAF7F2", // Backgrounds
          400: "#F5F1E8", // Section alternations
          500: "#FFFDF9", // Card backgrounds
        },
        gold: {
          400: "#E3C878", // Highlights
          500: "#D4AF37", // Primary Gold Accent
          600: "#C68E17", // Hover Gold Accent
        },
        green: {
          500: "#2d6a4f", // Vibrant natural green
          600: "#1b4332", // Deep forest green
          700: "#081c15", // Ultra dark green
        },
        charcoal: {
          800: "#1C1C1C", // Main Text
          900: "#0a0a0a", // Headings
        }
      },
      fontFamily: {
        heading: ["Tajawal", "serif"],
        body: ["Cairo", "sans-serif"]
      },
      boxShadow: {
        'luxury': '0 10px 40px -10px rgba(212,175,55,0.15)',
      }
    },
  },
  plugins: [],
}
