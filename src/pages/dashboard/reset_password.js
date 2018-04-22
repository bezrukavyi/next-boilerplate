import Layout from 'components/Layout'
import User from 'components/Dashboard/User'
import withReduxSaga from 'store';
import initial from 'initial'
import middle from 'initial/middlewares'

const Page = (props) => (
  <Layout.Dashboard>
    <p>This is the forgot password page</p>
    <User.ResetPasswordForm />
  </Layout.Dashboard>
)

Page.getInitialProps = initial([middle.resetPassword])

export default withReduxSaga(Page)
