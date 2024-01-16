const mongoose = require('mongoose')

const querySchema=mongoose.Schema({
    queryMessage:{
        type:String,
    },
    querySubject:{
        type:String,
    },
    queryUsername:{
        type:String,
    },
    queryContact:{
        type:String
    }
})

module.exports=mongoose.model('userQuery',querySchema)