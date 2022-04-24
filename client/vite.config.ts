import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    hmr: {
      clientPort: parseInt(process.env.HMR_PORT) || 8080, // vite@2.5.2 and newer: clientPort
    },
  },
});
