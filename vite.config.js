import { defineConfig } from "vite";
import { readFileSync } from "fs";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: "192.168.1.30",
    port: 6075,
    cors: false,
    https: {
      key: readFileSync("./ssl/private.key"),
      cert: readFileSync("./ssl/certificate.crt"),
      ca: [readFileSync("./ssl/ca_bundle.crt")],
    },
  },
});
