const morgan = require('morgan');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

const usersRoutes = require('./routes/users');

// settings
app.set('json spaces',4);

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// routes
app.use('/users', usersRoutes);

// start server

app.listen(3000, () => {
    console.log('server on port',  3000);    
});