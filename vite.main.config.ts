import { defineConfig } from "vite";

// https://vitejs.dev/config
export default defineConfig({
  build: {
    chunkSizeWarningLimit: Infinity,
    reportCompressedSize: false,
  },
  resolve: {
    mainFields: ["browser", "module", "jsnext:main", "jsnext"],
  },
});
