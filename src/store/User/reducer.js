import * as types from './types'
import { SUCCESS } from 'store/Api/types'

const user = (state = {}, { type, data }) => {
  switch (type) {
    case types.VALIDATE_TOKEN + SUCCESS: {
      return { ...state, ...data.data }
    }
    default:
      return state
  }
}

export default user
