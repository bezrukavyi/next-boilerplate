import Layout from 'components/Layout'
import User from 'components/Dashboard/User'
import withReduxSaga from 'store';
import initial from 'initial'
import middle from 'initial/middlewares'

const Page = (props) => (
  <Layout.Dashboard>
    <p>This is the sign in page</p>
    <User.SignInForm />
  </Layout.Dashboard>
)

Page.getInitialProps = initial([middle.guest])

export default withReduxSaga(Page)
