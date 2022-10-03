const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const workOutsController = require('./routes/api/workouts');
const nutruitionController = require('./routes/api/nutruition');
const suppsController = require('./routes/api/supps')
const cors = require('cors');

require('dotenv').config();
require('./config/database');

const app = express();

app.use(cors());

app.use(logger('dev'));
// there's no need to mount express.urlencoded middleware
// why is that?!!!!!!!!!!
app.use(express.json());
// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Check if token and create req.user
app.use(require('./config/checkToken'));

// routes 
app.use('/api/workouts', workOutsController);

app.use('/api/nutruition', nutruitionController);

app.use('/api/supps', suppsController);

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));


// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`I hear you backend d ${port}`)

})