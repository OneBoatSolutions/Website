/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: [{"myTheme" :{
        "primary": "#4f46e5",   // Rich Indigo
        "secondary": "#06b6d4", // Bright Cyan
        "accent": "#7c3aed",    // Vibrant Violet
        "neutral": "#9ca3af",   // Cool Gray
        "base-100": "#ffffff",  // Pure White
        "info": "#2563eb",      // Bold Blue
        "success": "#22c55e",   // Fresh Green
        "warning": "#facc15",   // Bright Yellow
        "error": "#ef4444"      // Strong Red
      }
    },"light", "cupcake"],
  },
}