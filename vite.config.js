import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: '/Simplify_pro/', 
  plugins: [react()],
  server: {
    proxy: {
      '/auth': {
        target: 'https://simplifypro.palsbase.online',
        changeOrigin: true,  // Ensures the origin is modified to match the target API
        secure: false,       // Disables SSL verification for local dev
      },
    },
  },
});