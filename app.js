require('module-alias/register');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var radiobaseRouter = require('./routes/radiobase')
var bodyParser = require('body-parser');
var app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// swagger options;
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Radiobase APIS',
            description: 'Radiobase API Information',
            contact: {
                name: 'Angel Santos'
            },
            servers: ['127.0.0.1']
        },
        host: 'localhost:3000',
        basePath: '/'
    },
    apis: ['app.js', './routes/*']
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Radiobase', radiobaseRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
