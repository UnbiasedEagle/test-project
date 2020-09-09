const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:'String',
        trim:true,
        required:true
    },
    birthdate:{
        type:Date,
        required:true
    },
    country:{
        type:String,
        trim:true,
        required:true
    },
    created:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('User', userSchema);