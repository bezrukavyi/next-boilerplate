import middleware from './middlewares'
import reduceFunc from 'utils/reduceFunc'

const baseMiddleWares = [
  middleware.fetchProps,
]

export default (middlewares = []) => {
  const runList = [...middlewares, ...baseMiddleWares]
  return reduceFunc(runList)
}
