import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'



// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
     tailwindcss(),
    ],
      test: {
    environment: 'jsdom', // 👈 necessary for DOM-based tests
    globals: true, // 👈 enables global test functions like 'describe', 'it', etc.
    setupFiles: './src/setupTests.js', // 👈 optional for custom setup
     coverage: {
      provider: 'v8', // or 'c8' (either works)
      reporter: ['text', 'html'], // terminal + HTML report
      exclude: ['node_modules/', 'dist/', 'coverage/', '**/*.test.*'], // optional
    },
  },
   
})
