import { connect } from 'react-redux'

import Meta from 'store/Meta'
import Project from 'store/Entities/Project'
import Component from './Component'

const mapStateToProps = (state) => {
  const { projectId } = Meta.selectors.query(state)

  return {
    project: Project.selectors.find(state, projectId)
  }
}

export default connect(mapStateToProps, null)(Component)
