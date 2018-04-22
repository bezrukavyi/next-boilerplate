import Cookie from 'utils/cookie'
import Path from 'constants/Path'
import { redirect } from 'utils/redirect'
import User from 'store/User'

const TOKEN_KEY = 'reset_password_token'

const saveCredentials = (context) => {
  const credentials = extractCredentials(context.query)
  if (!credentials[TOKEN_KEY]) throw 'Invalid token'
  Cookie.save(context, credentials)
}

const extractCredentials = (query) => {
  let headers = Cookie.extractHeaders(query)
  if (!headers['client-id']) headers['client-id'] = query['client_id']
  headers[TOKEN_KEY] = query[TOKEN_KEY]
  return headers
}

const resetPassword = next => async (context) => {
  const { isServer, store } = context

  if (!isServer) return handleError(error, context)

  try {
    saveCredentials(context)
    return next(context)
  } catch(error) {
    redirect(context)(Path.NotAllowed)
  }
}

export default resetPassword
