import { normalizePath } from '@rollup/pluginutils'
import { REF_IMPORT } from './common'
import type { Plugin } from 'rollup'

export default (): Plugin => ({
  name: 'unplugin-vue-ref',
  resolveId(id, importer) {
    if (id !== '@vue/reactivity') return
    if (importer) {
      if (REF_IMPORT.test(normalizePath(importer))) return
    }
    return this.resolve('unplugin-vue-ref')
  },
})
