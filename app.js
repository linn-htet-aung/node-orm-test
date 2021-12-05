const express = require('express');
const db = require('./config/db');

const app = express();

db.authenticate()
    .then(() => {
        app.listen(3000,() => {
            console.log('Server Listening at port 3000 .....');
        })
    })
    .catch((err) => {
        console.log(err);
    });

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routes/routes'));

/**
 *  1. db connection check, if success initialize webserver
 *  2. register view engine
 *  3. assign static directory path
 *  4. initialize cusotm middleware
 *  5. initialize routes
 */