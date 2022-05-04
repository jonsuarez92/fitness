const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const suppsSchema = new Schema({
img:  String,
name: String,
goodDetail: String,
badDetail: String,
des: String,
category: String,
url: String,
})

// make  model

module.exports = mongoose.model("Supp", suppsSchema );