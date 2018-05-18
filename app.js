// Dependencies
var createError = require('http-errors')
var errorHandler = require('./core/errorHandler.js')
var express = require('express')
var path = require('path')
var logger = require('morgan')
var sassMiddleware = require('node-sass-middleware')
var hbs = require('hbs')
var favicon = require('serve-favicon')
var sassConfig = require('./config/sassConfig.js')

// Routers
var indexRouter = require('./routes/index')
var apiRouter = require('./routes/scraper')

// Instantiate app
var app = express()

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
