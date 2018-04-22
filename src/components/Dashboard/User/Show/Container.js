import { connect } from 'react-redux'

import User from 'store/User'
import Component from './Component'

const mapStateToProps = (state) => {
  return {
    user: User.selectors.current(state)
  }
}

export default connect(mapStateToProps, null)(Component)
