import { connect } from 'react-redux'
import { withFormik } from 'formik'

import Component from './Component'
import User from 'store/User'
import Cookie from 'utils/cookie'
import formError from 'utils/formError'

const mapDispatchToProps = {
  ...User.actions
}

const handleSubmit = (values, props) => {
  User.requests.forgotPassword(values).catch(formError(props))
}

const formProps = ({
  handleSubmit,
  mapPropsToValues: (props) => ({ redirectUrl: process.env.RESET_PASSWORD_REDIRECT_URL })
})

const formikComponent = withFormik(formProps)(Component)

export default connect(null, mapDispatchToProps)(formikComponent)
