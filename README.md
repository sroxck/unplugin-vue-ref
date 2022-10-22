# unplugin-vue-ref

## Install

```bash
npm install unplugin-vue-ref
```

## Vite
``` ts
// vite.config.ts
import ViteRefPlugin from 'unplugin-vue-ref/vite'
export default {
  plugins: [
    ViteRefPlugin(),
    /* options */
  ],
}
```

## rollup
``` ts
// rollup.config.ts
import RollupRefPlugin from 'unplugin-vue-ref/rollup'
export default {
  plugins: [
    RollupRefPlugin(),
    /* options */
  ],
}
```

## esbuild
``` ts
// esbuild.config.ts
import { build } from 'esbuild'
build({
  plugins: [
    require('unplugin-vue-ref').esbuild({
      /* options */
    }),
  ],
})
```
#### TypeScript Type 

```jsonc
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@vue/reactivity": ["./node_modules/unplugin-vue-ref/types"]
    }
  }
}
```
  