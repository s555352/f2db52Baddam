const mongoose = require("mongoose")
const birdSchema = mongoose.Schema({
birdName: {
    type:String,
    required:true},
birdWeight: {
    type:Number,
    required:true,
    min:1,
    max:3000},
birdColor: {
    type:String,
    required:true}
})
module.exports = mongoose.model("bird",birdSchema)