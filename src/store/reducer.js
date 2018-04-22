import { combineReducers } from 'redux'

import Entities from './Entities'
import User from './User'
import Meta from './Meta'

export default combineReducers({
  entities: Entities.reducer,
  user: User.reducer,
  meta: Meta.reducer,
})
