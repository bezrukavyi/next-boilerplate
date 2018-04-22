import { insert, clear, slice } from 'json-api-transform'
import * as types from './types'

const entities = (state = {}, { type, names, payload }) => {
  switch (type) {
    case types.FETCH_ENTITY_SUCCESS:
    case types.UPDATE_ENTITY_SUCCESS:
    case types.CREATE_ENTITY_SUCCESS:
    case types.FETCH_ENTITIES_SUCCESS: {
      return insert(state, payload.data)
    }
    case types.CLEAR_ENTITIES: {
      return clear(state, names)
    }
    case types.DESTROY_ENTITY_SUCCESS: {
      return slice(state, payload.data)
    }
    default:
      return state
  }
}

export default entities
