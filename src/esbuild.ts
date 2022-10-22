import { normalizePath } from '@rollup/pluginutils'
import { REF_IMPORT,resolveOption } from './common'
import type { Plugin } from 'esbuild'
export default (): Plugin => ({
  name: 'unplugin-vue-ref',
  setup(build) {
    build.onResolve(resolveOption,({ importer }) => {
        if (REF_IMPORT.test(normalizePath(importer))) return
        return build.resolve('unplugin-vue-ref')
      }
    )
  }
})
