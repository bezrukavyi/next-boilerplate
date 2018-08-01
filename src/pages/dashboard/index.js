import withReduxSaga from 'store'
import Layout from 'components/Layout'
import User from 'components/Dashboard/User'
import initial from 'initial'
import middle from 'initial/middlewares'

const Page = (props) =>
  <Layout.Dashboard>
    <User.Show />
  </Layout.Dashboard>

Page.getInitialProps = initial([middle.auth])

export default withReduxSaga(Page)
