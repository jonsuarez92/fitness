const Schema = require('mongoose').Schema;

const workouts = new Schema({
img:  String,
name: String,
details: String,
category: String,
url: String,
})