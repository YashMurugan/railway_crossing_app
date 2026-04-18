import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

// Standard Vite configuration for React
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This helps the app find your files if the AI used "@/" shortcuts
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    open: true // This will automatically open your browser
  }
})