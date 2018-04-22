export const PAGE_PREFIX = 'PAGE'

const fetchProps = () => async (context) => {
  const { isServer, store } = context
  store.dispatch({ type: PAGE_PREFIX + context.pathname, context })
}

export default fetchProps
