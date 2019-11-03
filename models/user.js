const mongoos=require('mongoose');

const UserModel=mongoos.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    age:{
        type:Number
    }
})

module.exports=mongoos.model('User',UserModel);