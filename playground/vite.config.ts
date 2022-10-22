import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//@ts-ignore
import vitePlugin from 'unplugin-vue-ref/vite'
// import {vitePlugin} from '../src/unplugin'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vitePlugin(),vue()]
})
