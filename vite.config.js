import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // 이 부분 중요! (레포 이름이 kinhyo97.github.io이면 /)
});
