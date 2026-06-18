/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App/index.{js,jsx,ts,tsx}",
    "./App/screens/**/*.{js,jsx,ts,tsx}",
    "./App/components/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    // Overlay backgrounds (light + dark)
    "bg-black/80", "bg-black/30",
    "bg-slate-950/90", "bg-slate-950/60",
    // Card backgrounds
    "bg-purple-900", "bg-slate-800",
    "bg-purple-900/70", "bg-slate-800/70",
    // Text colors
    "text-fuchsia-200", "text-violet-300",
    "text-white", "text-slate-100",
    "text-sky-300", "text-cyan-300",
    // Buttons
    "bg-purple-800", "bg-indigo-800",
    "bg-sky-500", "bg-blue-700",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
