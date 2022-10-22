
import { createFunctional, rawToRef } from './functional'
import { isRef, vueRef } from './reactivity'

export * from '@vue/reactivity'

export const ref: typeof vueRef = (function (value: any) {
  if (isRef(value)) return value
  return createFunctional(vueRef(rawToRef(value)), false)
}) as any



