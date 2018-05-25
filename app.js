// Dependencies
const createError = require('http-errors')
const errorHandler = require('./core/errorHandler.js')
const express = require('express')
const path = require('path')
const logger = require('morgan')
const sassMiddleware = require('node-sass-middleware')
const hbs = require('hbs')
const favicon = require('serve-favicon')
const sassConfig = require('./config/sassConfig.js')

// Routers
const indexRouter = require('./routes/index')
const apiRouter = require('./routes/scraper')

// Instantiate app
const app = express()

// App config
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
hbs.registerPartials(path.join(__dirname, '/views/partials'))
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(sassMiddleware(sassConfig))
app.use(express.static(path.join(__dirname, 'public')))

// Route paths
app.use('/', indexRouter)
app.use('/api/scraper', apiRouter)

// Catch 404, error handler
app.use((req, res, next) => next(createError(404)))
app.use(errorHandler)

module.exports = app
