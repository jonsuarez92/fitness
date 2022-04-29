// connected to database.js
require('dotenv').config();
require('./config/database');


// Require the Mongoose models
 const User = require('./models/User');
 const workouts = require('./models/workouts');
 const nurtruition = require('./models/nutruition');


// Local variables will come in handy for holding 
//retrieved documents

let user, workout, category, nutrition;
let users, workouts, categories, nutritions;

//the reason why we made them let let it so this May that
// we can change them whenever we want, so we can keep 
//saying users equal to this user is equal to that users 
//is equal to whatever and we can run and crud operations.
