import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/components/VueCropper/index.ts',
      name: 'vueCropper'
    },
    rollupOptions: {
      external: ['vue']
    }
  }
})
