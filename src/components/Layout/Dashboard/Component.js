import Base from '../Base'
import Dashboard from 'components/Dashboard'

const Layout = (props) =>
  <Base>
    <h2>Dashboard</h2>
    { props.children }
  </Base>

export default Layout
