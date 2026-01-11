import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/the-zoo/",
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "/src/scss/abstracts/functions" as fn;
          @use "/src/scss/abstracts/variables" as var;
          @use "/src/scss/abstracts/mixins" as mx;
        `
      }
    }
  }
})
