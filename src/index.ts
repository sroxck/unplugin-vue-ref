
import { createFunctional, rawToRef } from './functional'
import { isRef, vueRef } from './reactivity'


export * from '@vue/reactivity'
export const ref = function (value: any) {
  if (isRef(value)) return value
  return createFunctional(vueRef(rawToRef(value)), false)
}



