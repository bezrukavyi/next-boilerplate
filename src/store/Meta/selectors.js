import { get } from 'lodash'

export const meta = (state) => state.meta
export const query = (state) => get(meta(state), 'query') || {}
