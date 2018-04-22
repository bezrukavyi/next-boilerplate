import clientCookie from 'js-cookie'
import { isString } from 'lodash'
import { pick } from 'ramda'

const KEY = process.env.COOKIE_AUTH_KEY
const HEADERS = [
  'token',
  'client-id',
  'uid'
]

const extractHeaders = pick(HEADERS)

const save = (context, headers) => {
  const jsonHeaders = JSON.stringify(headers)
  if (context.res) {
    context.res.cookie(KEY, jsonHeaders)
  } else {
    clientCookie.set(KEY, jsonHeaders)
  }
}

const saveHeaders = (context, headers) => save(context, extractHeaders(headers))

const get = (context, name) => {
  let headers = context.req ? context.req.cookies[KEY] : clientCookie.get(KEY)
  headers = headers ? JSON.parse(headers) : {}
  return name ? headers[name] : headers 
}

const clear = (context) => {
  if (context.res) {
    context.res.clearCookie(KEY)
  } else {
    clientCookie.remove(KEY)
  }
}

export default {
  get,
  save,
  saveHeaders,
  clear,
  extractHeaders,
}
