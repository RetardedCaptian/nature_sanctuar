const mongoose=require('mongoose')
const images=mongoose.Schema({
    imageName:String,
    roomtype:String,
})

module.exports =mongoose.model('image',images)