import { get } from 'lodash';
import { cond, pipe, identity, chain, T, toPairs } from 'ramda'
import { isArray, transform, isNil, isString, join, capitalize, lowerCase } from 'lodash'
import { replace } from './redirect'
import Path from 'constants/Path'

const adaptErrors = (errors) => transform(errors, (result, value, key) => result[key] = join(value, ', '), {})

const errorsToString = cond([
  [isNil, identity],
  [isArray, identity],
  [T, pipe(toPairs, chain(([k, vs]) => map((v) => `${capitalize(lowerCase(k))} ${v}`, vs)))]
])

const fetchError = (errorReject) =>
  get(errorReject, 'response.data.errors')
  || errorsToString(get(errorReject, 'response.data.errors'))
  || get(errorReject, 'response.statusText')
  || get(errorReject, 'error.message')

const formError = ({ props, setSubmitting, setErrors }, callback) => (reject) => {
  setSubmitting(false)
  let error = fetchError(reject)
  if (!error) { return replace(Path.Error500) }
  error = isArray(error) || isString(error) ? { base: error } : adaptErrors(error)
  setErrors(error)
  if(callback) callback(reject)
}

export default formError
