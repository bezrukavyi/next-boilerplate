import { find as lodashFind } from 'lodash'
import * as Entities from 'store/Entities/selectors'
import { pick } from 'ramda'

const TYPE = 'projects'

export const all = (state) => Entities.all(state)(TYPE)
export const allIds = (state) => Entities.allIds(state)(TYPE)
export const byId = (state) => Entities.byId(state)(TYPE)
export const find = (state, id) => lodashFind(all(state), (project) => project.id == id)
