const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: './src' })

const initServer = require('./initServer')
const routerConfig = require('./routerConfig')
const handleError = require('./handleError')

const server = initServer()
const router = routerConfig({ server, app })

app.prepare().then(router).catch(handleError)
