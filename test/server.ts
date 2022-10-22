import { fileURLToPath } from 'url'
import { createServer } from 'vite'
import vue from '@vitejs/plugin-vue'
const __dirname = fileURLToPath(new URL('.', import.meta.url));
import ViteRefPlugin from 'unplugin-vue-ref/vite'
(async () => {
  const server = await createServer({
    configFile: false,
    mode:'development',
    plugins: [vue(),ViteRefPlugin()],
    root: __dirname,
    server: {
      watch: {
        persistent:true,
        useFsEvents:true,
        alwaysStat:true,
      },
      port: 1337
    }
  })
  await server.listen() 
  server.printUrls()
})()
