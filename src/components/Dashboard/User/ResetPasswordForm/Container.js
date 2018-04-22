import { connect } from 'react-redux'
import { withFormik } from 'formik'

import Cookie from 'utils/cookie'
import { replace } from 'utils/redirect'
import Path from 'constants/Path'
import Component from './Component'
import User from 'store/User'
import formError from 'utils/formError'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
  ...User.actions
}

const onSuccess = ({ props, setSubmitting, setErrors }) => (response) => {
  Cookie.saveHeaders({}, response.headers)
  replace(Path.root)
}

const handleSubmit = (values, props) => {
  User.requests.updatePassword(values).catch(formError(props))
}

const formProps = ({
  handleSubmit,
  mapPropsToValues: (props) => ({ resetPasswordToken: Cookie.get({}, 'reset_password_token') })
})

const formikComponent = withFormik(formProps)(Component)

export default connect(mapStateToProps, mapDispatchToProps)(formikComponent)
