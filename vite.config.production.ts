import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Production configuration for subdomain deployment
export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild",
    target: "es2015",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["@radix-ui/react-dialog", "@radix-ui/react-tabs", "@radix-ui/react-accordion"],
          supabase: ["@supabase/supabase-js"],
          icons: ["lucide-react"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  preview: {
    host: "0.0.0.0",
    port: 8080,
  },
});
