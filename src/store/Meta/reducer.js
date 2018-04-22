import * as Type from './types'
import { SUCCESS } from '../Api/types'
import { pickBy } from 'lodash'
import deepmerge from 'deepmerge'

const initialState = {}

const user = (state = initialState, { type, ...data }) => {
  switch (type) {
    case Type.ADD_META: {
      return deepmerge.all([state, data])
    }
    case Type.REMOVE_META: {
      return pickBy(state[name] || state, (value, key) => !data.names.includes(key))
    }
    case Type.CLEAR_META: {
      return initialState
    }
    default:
      return state
  }
}

export default user
