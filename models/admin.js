const mongoose=require('mongoose')

const admin=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{collection:'admin'})

module.exports =mongoose.model('admin',admin)