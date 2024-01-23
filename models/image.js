const mongoose=require('mongoose')
const images=mongoose.Schema({
    imageName:String,
    imagePos:String,
})

module.exports =mongoose.model('image',images)