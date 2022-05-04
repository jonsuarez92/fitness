const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workOutsSchema = new Schema({
img:  String,
name: String,
details: String,
category: String,
des: String,

})

// make  model

module.exports = mongoose.model("Workouts", workOutsSchema );