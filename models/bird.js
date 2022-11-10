const mongoose = require("mongoose")
const birdSchema = mongoose.Schema({
birdName: String,
birdWeight: Number,
birdColor: String
})
module.exports = mongoose.model("bird",birdSchema)