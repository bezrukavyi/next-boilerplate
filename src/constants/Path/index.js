const Dashboard = require('./Dashboard')

const PREFIX = '/'

const Root = {
  page: PREFIX + 'index',
  href: PREFIX,
  as: PREFIX,
}

const Error404 = {
  page: PREFIX + '404',
  href: PREFIX + '404',
  as: PREFIX + '404',
}

const NotAllowed = Dashboard.SignIn

const Error500 = {
  page: PREFIX + '500',
  href: PREFIX + '500',
  as: PREFIX + '500',
}

module.exports = {
  Dashboard,
  Root,
  Error404,
  Error500,
  NotAllowed,
}
