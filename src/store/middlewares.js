import { applyMiddleware, compose } from 'redux'
import { createLogger as createLoggerMiddleware } from 'redux-logger'

const isDev = process.env.NODE_ENV === 'development'

const configureMiddlewares = (initialMiddlewares) => {
  const loggerMiddleware = createLoggerMiddleware({
    collapsed: true,
    timestamp: false,
    duration: true,
  })

  const devMiddlewares = isDev ?
    [loggerMiddleware] :
    []

  const middlewares = applyMiddleware(
    ...initialMiddlewares,
    ...devMiddlewares
  )

  return compose(middlewares)
}

export default configureMiddlewares
