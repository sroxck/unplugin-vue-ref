import {
  isRef,
  computed as vueComputed,
  customRef as vueCustomRef,
  readonly as vueReadonly,
  ref as vueRef,
  shallowRef as vueShallowRef,
  toRef as vueToRef,
  toRefs as vueToRefs,
} from '@vue/reactivity'
import { createFunctional,rawToRef } from './functional'

export * from '@vue/reactivity'

export const ref: typeof vueRef = ((value: any) => {
  if (isRef(value)) return value
  return createFunctional(vueRef(rawToRef(value)), false)
}) as any

export const computed: typeof vueComputed = (getter: any, debugOptions: any) =>
  createFunctional(vueComputed(getter, debugOptions), typeof getter === 'function')

export const shallowRef: typeof vueShallowRef = ((value: any): any =>
  createFunctional(vueShallowRef(rawToRef(value)), false)) as any

export const customRef: typeof vueCustomRef = ((value: any): any =>
  createFunctional(vueCustomRef(rawToRef(value)), false)) as any

export const readonly: typeof vueReadonly = (target: any): any =>
  createFunctional(vueReadonly(rawToRef(target)), true)

export const toRef: typeof vueToRef = (obj: any, key: string): any =>
  createFunctional(vueToRef(obj, key), false)

export const toRefs: typeof vueToRefs = (obj: any): any => {
  const refs = vueToRefs(obj)
  if (typeof refs !== 'object') return refs
  for (const key of Object.keys(refs)) {
    refs[key] = createFunctional(refs[key], false)
  }
  return refs
}


