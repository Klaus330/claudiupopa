import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mdPlugin from "vite-plugin-markdown"
let mdOptions = {
  mode: 'html'
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), mdPlugin(mdOptions)],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
