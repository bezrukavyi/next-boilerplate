import Cookie from 'utils/cookie'
import Path from 'constants/Path'
import { redirect } from 'utils/redirect'
import User from 'store/User'

const auth = (next) => async (context) => {
  const { isServer, store } = context

  try {
    const result = await User.requests.vaildateToken(context)()
    Cookie.saveHeaders(context, result.headers)
    store.dispatch(User.actions.insertUser(result.data))
    return next(context)
  } catch(error) {
    redirect(context)(Path.NotAllowed)
  }
}

export default auth
