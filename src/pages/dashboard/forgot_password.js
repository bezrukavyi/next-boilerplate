import Layout from 'components/Layout'
import User from 'components/Dashboard/User'
import withReduxSaga from 'store'
import initial from 'initial'

const Page = (props) => (
  <Layout.Dashboard>
    <p>This is the forgot password page</p>
    <User.ForgotPasswordForm />
  </Layout.Dashboard>
)

Page.getInitialProps = initial()

export default withReduxSaga(Page)
