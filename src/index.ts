
import { createFunctional, rawToRef } from './functional'
import { isRef, vueRef, vueComputed, vueShallowRef, vueCustomRef, vueReadonly, vueToRef, vueToRefs } from './reactivity'

export * from '@vue/reactivity'

export const ref: typeof vueRef = (function (value: any) {
  if (isRef(value)) return value
  return createFunctional(vueRef(rawToRef(value)), false)
}) as any

export const computed: typeof vueComputed = function (getter: any, debugOptions: any) {
  return createFunctional(vueComputed(getter, debugOptions), typeof getter === 'function')
}

export const shallowRef: typeof vueShallowRef = (function (value: any) {
  return createFunctional(vueShallowRef(rawToRef(value)), false)
}) as any

export const readonly: typeof vueReadonly = function (target: any): any {
  return createFunctional(vueReadonly(rawToRef(target)), true)
}

export const customRef: typeof vueCustomRef = function (value: any) {
  return createFunctional(vueCustomRef(rawToRef(value)), false)
}

export const toRef: typeof vueToRef = function (obj: any, key: string) {
  return createFunctional(vueToRef(obj, key), false)
}

export const toRefs: typeof vueToRefs = function (obj: any) {
  const refs = vueToRefs(obj)
  if (typeof refs !== 'object') return refs
  for (const key of Object.keys(refs)) {
    refs[key] = createFunctional(refs[key], false)
  }
  return refs
}


