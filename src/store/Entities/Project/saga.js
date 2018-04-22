import { select, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Project from './requests'
import Path from 'constants/Path'
import { redirect, replace } from 'utils/redirect'
import * as types from 'store/Entities/types'

function* fetch({ context, projectId }) {
  try {
    const payload = yield call(Project.show(context), { projectId })
    yield put({ type: types.FETCH_ENTITY_SUCCESS, payload });
  } catch (e) {
    redirect(context)(Path.Error404)
  }
}

export default {
  fetch,
}
