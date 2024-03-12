import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/" + process.env.IMAGE_NAME,
  plugins: [react()],
  server: {
    host: "0.0.0.0",
  },
});
