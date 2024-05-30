import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//导入插件
import VueSetupte from "vite-plugin-vue-setup-extend"


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    //导入插件
    VueSetupte()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
