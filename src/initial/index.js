import middleware from './middlewares'
import reduceFunc from 'utils/reduceFunc'

const baseMiddleWares = [
  middleware.userRequest,
]

const finalMiddleWare = [
  middleware.fetchProps,
]

export default (middlewares = []) => {
  const runList = [...baseMiddleWares, ...middlewares, ...finalMiddleWare]
  return reduceFunc(runList)
}
