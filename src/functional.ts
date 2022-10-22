import { isRef } from '@vue/reactivity'
import { prototype_proxy } from './common'
export function createFunctional(raw: any, readonly: boolean): any {
  if (!isRef(raw)) return raw
  const fn = () => raw.value
  
  const nativeFunction = Object.fromEntries(
    prototype_proxy.map((key) => [
      key,
      (target: any, ...args: any[]) => (Reflect[key] as any)(raw, ...args),
    ])
  )

  return new Proxy(fn, {
    ...nativeFunction,
    get(target, key) {
      if (!readonly && key === 'set') {
        return (value: any) => (raw.value = value) 
      } else if (key === '__raw_ref') {
        return rawToRef(raw)
      } else {
        return Reflect.get(raw, key, raw)
      }
    },
    set(target, key, newValue) {
      if (key === 'set') return false
      return Reflect.set(raw, key, newValue, raw)
    },
  })
}
export function rawToRef(raw: any): any {
  return raw?.__raw_ref ? rawToRef(raw.__raw_ref) : raw
}
