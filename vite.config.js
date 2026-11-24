import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Three pages: the chooser at /, the fun site at /fun/ and the focus site at /focus/.
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        chooser: resolve(import.meta.dirname, 'index.html'),
        fun: resolve(import.meta.dirname, 'fun/index.html'),
        focus: resolve(import.meta.dirname, 'focus/index.html'),
      },
    },
  },
})
