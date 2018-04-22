import Api from 'store/Api/actions'

const show = (context) => ({ projectId }) => Api.get(context)({ path: `projects/${projectId}` })

export default {
  show,
}
