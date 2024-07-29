/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
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
				accent: "rgba(255, 102, 0, 1)",
				accentLight: "rgba(255, 102, 0, 0.1)",
				grayish: "#64748B",
				lightGray: "rgba(194, 194, 194, 1)",
				accentGray: "#E6E6E6",
				accentPink: "rgba(237, 79, 157, 1)",
				lightAccentPink: "rgba(253, 242, 248, 1)",
				accentGreen: "rgba(36, 209, 100, 1)",
				lightAccentGreen: "rgba(233, 250, 239, 1)",
				blackish: "rgba(15, 23, 42, 1)",
				bgLight: "rgba(248, 249, 253, 1)",
				accentBlue: "rgba(37, 99, 235, 1)",
				lightAccentBlue: "rgba(233, 239, 253, 1)",
			},
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}