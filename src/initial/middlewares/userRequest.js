import Cookie from 'utils/cookie'
import User from 'store/User'

const userRequest = (next) => async (context) => {
  const { isServer, store } = context

  try {
    const result = await User.requests.vaildateToken(context)()
    Cookie.saveHeaders(context, result.headers)
    store.dispatch(User.actions.insertUser(result.data))
    return next(context)
  } catch(error) {
    return next(context)
  }
}

export default userRequest
