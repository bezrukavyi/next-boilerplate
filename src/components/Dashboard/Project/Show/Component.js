import { startCase } from 'lodash'

const Show = (props) => {
  const { project } = props

  return (
    <div>
      <h2>{project.title}</h2>
    </div>
  )
}

export default Show
