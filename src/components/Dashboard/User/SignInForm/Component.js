import Field from 'components/Field'

const SignInForm = (props) => {
  const { handleSubmit, errors } = props

  return (
    <form onSubmit={props.handleSubmit}>
      <Field.Input name='email' type='email' {...props} />
      <Field.Input name='password' type='password' {...props} />

      {errors.base && <div>{errors.base}</div>}

      <button type="submit">
        Submit
      </button>
    </form>
  )
}

export default SignInForm
