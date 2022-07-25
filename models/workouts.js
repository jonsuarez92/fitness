const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workOutsSchema = new Schema({
    bannerImg: String,
    img1: String,
    img2: String,
    img3: String,
    img4: String,
    img5: String,
    name: String,
    details: String,
    category: String,
    des: String,

})

// make  model

module.exports = mongoose.model("Workouts", workOutsSchema);