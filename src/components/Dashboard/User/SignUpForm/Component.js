import Field from 'components/Field'

const SignUpForm = (props) => {
  const { handleSubmit, errors } = props

  return (
    <form onSubmit={handleSubmit}>
      <Field.Input name='email' type='email' {...props} />
      <Field.Input name='password' type='password' {...props} />
      <Field.Input name='passwordConfirmation' type='password' {...props} />

      {errors.base && <div>{errors.base}</div>}

      <button type="submit">
        Submit
      </button>
    </form>
  )
}

export default SignUpForm
