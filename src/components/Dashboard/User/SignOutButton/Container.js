import { connect } from 'react-redux'
import { replace } from 'utils/redirect'
import Path from 'constants/Path'
import Component from './Component'
import User from 'store/User'
import Cookie from 'utils/cookie'

const mapDispatchToProps = {
  ...User.actions
}

const signOut = (callback) => {
  callback()
  Cookie.clear({})
  replace(Path.Root)
}

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  signOut: () => signOut(dispatchProps.removeUser)
})

export default connect(null, mapDispatchToProps, mergeProps)(Component)
