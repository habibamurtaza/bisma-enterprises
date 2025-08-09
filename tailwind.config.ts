import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      container: { center: true, padding: "1rem", screens: { "2xl": "1200px" } },
      boxShadow: { luxe: "0 10px 40px rgba(2, 6, 23, 0.55)" },
      keyframes: {
        gradientMove: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        }
      },
      animation: {
        gradientMove: 'gradientMove 18s ease infinite',
        floaty: 'floaty 4s ease-in-out infinite',
      }
    }
  },
  plugins: []
};
export default config;
