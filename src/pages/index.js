import Link from 'next/link'
import withReduxSaga from 'store'
import Layout from 'components/Layout'

const Index = (props) =>
  <Layout.Base>
    Landing
  </Layout.Base>

export default withReduxSaga(Index)
