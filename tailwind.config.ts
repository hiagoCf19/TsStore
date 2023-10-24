/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        roxo: "var(--roxo)",
        cor25: "var(--cor25)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
      },

      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        BannerRoxoMobile: "url('Assets/Mobile/mobileRoxo.png')",
        BannerLaranjaMobile: "url('Assets/Mobile/mobileLaranja.png')",
        BannerRosaMobile: "url('Assets/Mobile/mobileRosa.png')",
        BannerRoxoDesktop: "url('Assets/Desktop/roxoDesktop.png')",
        BannerLaranjaDesktop: "url('Assets/Desktop/laranjaDesktop.png')",
        BannerRosaDesktop: "url('Assets/Desktop/RosaDesktop.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
