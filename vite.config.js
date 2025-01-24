import { defineConfig } from 'vite'
import react from '@vite-plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: './index.html'
    }
  }
})
