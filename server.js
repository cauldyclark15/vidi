require('babel-register')

const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const { StaticRouter } = require('react-router-dom')
const _ = require('lodash')
const fs = require('fs')
const port = 1515
const baseTemplate = fs.readFileSync('./index.html')
const template = _.template(baseTemplate)
const App = require('./js/App').default

const server = express()

server.use('/public', express.static('./public'))

server.use((req, res) => {
  const context = {}
  const body = ReactDOMServer.renderToString(
    React.createElement(StaticRouter, { location: req.url, context: context }, React.createElement(App))
  )
  res.write(template({ body: body }))
  res.end()
})

server.listen(port)
console.log(`server running at port ${port}`)
