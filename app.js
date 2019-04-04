const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

const users = require('./routes/users.route');
const games = require('./routes/games.route');

process.env.NODE_ENV = 'development';

const PORT = 1234;
const DEV_DB_URL = 'mongodb://tomorps:Llcl1992%40%40@ds121636.mlab.com:21636/tomorps';

//Initialize our express app
const app = express();

//Set up mongoose connection
const mongoDB = process.env.MONGODB_URI || DEV_DB_URL;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Setup CORS
app.use(cors());

//Setup bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Setup routers
app.use('/games', games);
app.use('/users', users);

require('log-timestamp');

//Setup error handler
app.use((err, req, res, next) => {
    console.error('[Error] ' + err.message);
    if (!err.statusCode) err.statusCode = 500;
  
    res.status(err.statusCode).send(err.message);
  });

app.listen(PORT, () => {
    console.log('Server is up and running on port: ' + PORT);
});