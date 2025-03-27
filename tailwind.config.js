/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [ "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
      extend: {
        animation: {
          "spin-slow": "spinInfinite 60s linear infinite", 
          "heartbeat": "thumpThump 2s infinite",
          "fade-in": "fade-in ease forwards 0.5s",
          "wave1": 'wave 12s ease-in-out infinite',
          "wave2": 'wave 8s ease-in-out infinite 0.5s',
          "wave3": 'wave 14s ease-in-out infinite 1s',
          "wave4": 'wave 16s ease-in-out infinite 1.5s',
          "wave5": 'wave 12s ease-in-out infinite 2s',
          "wave6": 'wave 14s ease-in-out infinite 1s',
        },
        fontFamily: {
          "ralewayBlack": ['Raleway-Black', 'sans-serif'],
          "ralewayLight": ['Raleway-Light', 'sans-serif'],
          "ralewayRegular": ['Raleway-Regular', 'sans-serif'],
          "ralewayMedium": ['Raleway-Medium', 'sans-serif'],
          "ralewayThin": ['Raleway-Thin', 'sans-serif'],
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: "0"},
            "100%": { opacity: "1"}
          },
          spinInfinite: {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" },
          },
          thumpThump: {
            "0%": { animationTimingFunction: "ease-out", transform: "scale(0.95)"},
            "70%": { animationTimingFunction: "ease-in", transform: "scale(1)"},
            "100%": { animationTimingFunction: "ease-out", transform: "scale(0.95)"},
          },
          wave: {
            '0%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(10px) scale(1.1)', },
            '100%': { transform: 'translateY(0)' },
          },
          }
        },
      },
    plugins: [],
  }
  
  