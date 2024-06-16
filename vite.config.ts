import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/global/',
  plugins: [
    UnoCSS(),
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],

  server: {
    proxy: {
      "/api": {
        changeOrigin: true,
        target: "https://manage.jiheconnect.com",
        rewrite: (path) => path.replace('/api', '')
      }
    }
  }

})
