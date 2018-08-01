import { createStore } from 'redux';
import withRedux from 'next-redux-wrapper'
import nextReduxSaga from 'next-redux-saga'
import createSagaMiddleware from 'redux-saga'

import configureMiddlewares from './middlewares'
import reducer from './reducer'
import rootSaga from './saga'

const saga = createSagaMiddleware()

const configureStore = initialState => {
  const middlewares = configureMiddlewares([saga])
  const store = createStore(reducer, initialState, middlewares)

  store.runSagaTask = () => store.sagaTask = saga.run(rootSaga)
  store.runSagaTask()

  return store
}

export default function withReduxSaga(BaseComponent) {
  return withRedux(configureStore)(nextReduxSaga(BaseComponent))
}
