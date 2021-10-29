const CRUD=require('./CRUD');

const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    user_name:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
        min:6,
        max:64
    },
    is_admin:{
        type:Boolean,
        default:false
    }
})

const user=mongoose.model('User',userSchema);

module.exports=new CRUD(user);