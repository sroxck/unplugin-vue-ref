// 代理原型属性，避免丢失
export const prototype_proxy = [
  'construct',
  'defineProperty',
  'deleteProperty',
  'getOwnPropertyDescriptor',
  'getPrototypeOf',
  'has',
  'isExtensible',
  'ownKeys',
  'preventExtensions',
  'setPrototypeOf',
] as const

export const REF_IMPORT = /unplugin-vue-ref\/dist\/index\.m?js$/
export const resolveOption =  { filter: /^@vue\/reactivity$/, namespace: 'file' }
