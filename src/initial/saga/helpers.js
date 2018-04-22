import { put } from 'redux-saga/effects'
import Meta from 'store/Meta'

function* metaQuery ({ context }) {
  const { query } = context
  yield put(Meta.actions.addQuery(query))
}

export default {
  metaQuery
}
