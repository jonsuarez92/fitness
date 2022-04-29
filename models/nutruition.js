const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nurtruitionSchema = new Schema({
img:  String,
name: String,
details: String,
category: String,
url: String,
})

// make  model

module.exports = mongoose.model("Nutruition", nurtruitionSchema );