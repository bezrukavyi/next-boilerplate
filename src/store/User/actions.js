import * as type from './types'
import { SUCCESS } from 'store/Api/types'

export const insertUser = (data) => ({ type: type.VALIDATE_TOKEN + SUCCESS, data })

export const removeUser = () => ({ type: types.REMOVE_USER })
