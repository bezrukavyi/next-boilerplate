import { call, all, takeLatest } from 'redux-saga/effects'
import Path from 'constants/Path'
import helpers from './helpers'
import Project from 'store/Entities/Project/saga'
import { PAGE_PREFIX } from '../middlewares/fetchProps'

function* Root({ context }) {
  yield call(helpers.metaQuery, { context })
}

function* ProjectPage({ context }) {
  const { projectId } = context.query
  yield all([
    call(Project.fetch, { context, projectId }),
  ])
  yield call(helpers.metaQuery, { context })
}

export default {
  takeLatest: [
    takeLatest(PAGE_PREFIX + Path.Dashboard.Root.page, Root),
    takeLatest(PAGE_PREFIX + Path.Dashboard.Project.page, ProjectPage),
  ]
}
