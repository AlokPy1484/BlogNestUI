import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#93C5FD",   // light blue
          DEFAULT: "#345cec", // blue-500
          dark: "#345cec",    // dark blue
        },
        secondary: {
          light: "#FDE68A",   // light yellow
          DEFAULT: "#FACC15", // yellow-400
          dark: "#CA8A04",    // dark yellow
        },
        accent: {
          light: "#6EE7B7",   // mint green
          DEFAULT: "#10B981", // green-500
          dark: "#065F46",    // dark green
        },
        neutral: {
          light: "#F3F4F6",   // gray-100
          DEFAULT: "#6B7280", // gray-500
          dark: "#111827",    // gray-900
        },
        danger: {
          light: "#FCA5A5",   // light red
          DEFAULT: "#EF4444", // red-500
          dark: "#991B1B",    // dark red
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
    },
  },
  darkMode: "class", // enable dark mode via `class="dark"`
  plugins: [],
}

export default config
