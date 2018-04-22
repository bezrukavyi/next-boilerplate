const path = require('path')
const express = require('express')
const cookieParser = require('cookie-parser')
const favicon = require('serve-favicon')

const isDev = process.env.NODE_ENV === 'development'

require('dotenv').config({
  path: isDev ? '.env' : '.env.production'
})

const serverInit = () => {
  const server = express()

  server.use(cookieParser())
  server.use('/_s', express.static(path.join(__dirname, '../.build/static')))
  server.use(favicon(path.join(__dirname, '../src', 'static', 'img', 'favicon.ico')))

  return server
}

module.exports = serverInit
