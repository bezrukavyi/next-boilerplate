import Layout from 'components/Layout'
import User from 'components/Dashboard/User'
import withReduxSaga from 'store';
import initial from 'initial'

const Page = (props) => (
  <Layout.Dashboard>
    <p>This is the sign up page</p>
    <User.SignUpForm />
  </Layout.Dashboard>
)

Page.getInitialProps = initial()

export default withReduxSaga(Page)
