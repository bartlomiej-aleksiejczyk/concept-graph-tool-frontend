import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/image_name/", // Set this as per your reverse proxy setup
  plugins: [react()],
  // other production-specific config
});
