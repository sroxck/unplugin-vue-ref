import { createUnplugin } from 'unplugin'
import { normalizePath } from 'vite'
import { REF_IMPORT } from './common'

export default createUnplugin(options => ({
  name: 'unplugin-vue-ref',
  resolveId(id, importer) {
    if (id !== '@vue/reactivity') return
    if (importer) {
      if (REF_IMPORT.test(normalizePath(importer))) return
    }
    return 'unplugin-vue-ref'
  },
  transformInclude(id) {
    return id.endsWith('main.ts')
  },
  transform(code) {
    return code.replace('__UNPLUGIN__', `Hello Unplugin! ${options}`)
  },
}))
