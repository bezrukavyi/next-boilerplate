import Layout from 'components/Layout'
import Project from 'components/Dashboard/Project'
import withReduxSaga from 'store'
import initial from 'initial'

const Page = (props) => (
  <Layout.Dashboard>
    <Project.Show />
  </Layout.Dashboard>
)

Page.getInitialProps = initial()

export default withReduxSaga(Page)
