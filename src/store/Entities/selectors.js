import { get } from 'lodash'
import { values, map } from 'lodash'

export const getEntities = (state) => state.entities
export const all = (state) => (type) => values(get(getEntities(state), `${type}.byId`))
export const allIds = (state) => (type) => values(get(getEntities(state), `${type}.allIds`))
export const byId = (state) => (type, id) => get(getEntities(state), `${type}.byId.${id}`)
