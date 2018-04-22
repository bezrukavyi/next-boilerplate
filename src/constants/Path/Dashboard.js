const PREFIX = '/dashboard/'

const Root = {
  page: '/dashboard',
  href: '/dashboard',
  as: '/dashboard'
}

const SignIn = {
  page: PREFIX + `sign_in`,
  href: PREFIX + 'sign_in',
  as: PREFIX + 'sign_in'
}

const SignUp = {
  page: PREFIX + `sign_up`,
  href: PREFIX + 'sign_up',
  as: PREFIX + 'sign_up'
}

const ForgotPassword = {
  page: PREFIX + `forgot_password`,
  href: PREFIX + 'forgot_password',
  as: PREFIX + 'forgot_password'
}

const Project = {
  page: PREFIX + 'project',
  href: (projectId) => PREFIX + `project?projectId=${projectId}`,
  as: (projectId) => PREFIX + `projects/${projectId}`,
}

module.exports = {
  Root,
  SignIn,
  SignUp,
  ForgotPassword,
  Project,
}

