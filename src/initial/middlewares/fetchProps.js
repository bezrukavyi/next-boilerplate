export const PAGE_PREFIX = 'PAGE'

const fetchProps = (next) => async (context) => {
  const { isServer, store } = context
  store.dispatch({ type: PAGE_PREFIX + context.pathname, context })
  if (next) { next(context) }
}

export default fetchProps
