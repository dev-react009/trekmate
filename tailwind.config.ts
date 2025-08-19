// tailwind.config.js
const { heroui } = require("@heroui/react");

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: "#6366f1",          // Indigo
            secondary: "#10b981",        // Green
            background: "#f9fafb",
          }
        },
        dark: {
          colors: {
            primary: "#6366f1",
            secondary: "#10b981",
            background: "#0f0f1a",
          }
        }
      }
    })
  ]
}
