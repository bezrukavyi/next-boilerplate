import { takeLatest } from 'redux-saga/effects'

import Dashboard from './Dashboard'

export default {
  root: [
    ...Dashboard.takeLatest,
  ]
}
