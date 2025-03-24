import { defineConfig } from 'vite'
import path from "path"
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/rcs-chatbot",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      '@shadcn/ui': path.resolve(__dirname, 'node_modules/@shadcn/ui/dist'),
    },
  },
})
