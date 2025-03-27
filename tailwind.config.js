/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [ "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
      extend: {
        animation: {
          "spin-slow": "spinInfinite 60s linear infinite", 
          "heartbeat": "thumpThump 2s infinite"
        },
        keyframes: {
          spinInfinite: {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" },
          },
          thumpThump: {
            "0%": { animationTimingFunction: "ease-out", transform: "scale(0.95)"},
            "70%": { animationTimingFunction: "ease-in", transform: "scale(1)"},
            "100%": { animationTimingFunction: "ease-out", transform: "scale(0.95)"},
          }
          }
        },
      },
    plugins: [],
  }
  
  