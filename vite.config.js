import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite' // 不加这个配置，ElMessage出不来

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 按需引入，主题色的配置，需要加上 importStyle: 'sass'
    Components({
      resolvers: [ElementPlusResolver({
        importStyle: 'sass'
      })],
    }),
    // 用于内部方法调用，样式缺失的现象，如 ElMessage 等
    ElementPlus()
  ],
  resolve: {
    alias:{
      '~': path.resolve(__dirname, './'), //代表根目录下的别名
      '@': path.resolve(__dirname, 'src') //src 目录下的别名
    }
  },
  base: './',
  server:{
    proxy: {
      '/api': {
        target: 'http://backend-api-02.newbee.ltd/manage-api/v1', 
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '') // 重写 api 为 空，就是去掉它
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;`,
      }
    }
  },
  build:{
    outDir:'./dist'
  }
})
