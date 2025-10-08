import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss({
      config: {
        darkMode: "class", // ✅ enable class-based dark mode
        content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
        theme: {
          extend: {},
        },
        plugins: [],
      },
    }),
    react(),
  ],
});
