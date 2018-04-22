import { curry, pipe, T, cond, identity, chain, fromPairs } from 'ramda'
import { isArray, transform, isNil, camelCase, snakeCase, isObject, map as lodashMap } from 'lodash'

const map = curry((f, x) => lodashMap(x, f))

const deepTransformKeys = curry((f, value) => cond([
  [isArray, map(deepTransformKeys(f))],
  [isObject, pipe(map((value, key) => [f(key), deepTransformKeys(f, value)]), fromPairs)],
  [T, identity],
])(value))

export const camelCaseKeys = (object) => deepTransformKeys(camelCase, object)
export const snakeCaseKeys = (object) => deepTransformKeys(snakeCase, object)

export default { camelCaseKeys, snakeCaseKeys }
