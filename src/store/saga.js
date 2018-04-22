import { all } from 'redux-saga/effects'
import Initial from 'initial/saga'

function* rootSaga() {
  yield all([
    ...Initial.root,
  ])
}

export default rootSaga;
