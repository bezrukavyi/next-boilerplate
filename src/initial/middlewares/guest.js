import Cookie from 'utils/cookie'
import Path from 'constants/Path'
import { redirect } from 'utils/redirect'
import { isEmpty } from 'lodash'

const guest = (next) => async (context) => {
  const { isServer, store } = context

  let user = store.getState().user 

  if (isEmpty(user)) {
    next(context)
  } else {
    redirect(context)(Path.Dashboard.Root)  
  }
}

export default guest
