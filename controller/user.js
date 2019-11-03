const User=require('../models/user');




module.exports.register=(req,res)=>{
    const user=new User({
        username:req.body.username,
        password:req.body.password,
        age:req.body.age
    })

    user.save()
    .then(user=>{
        res.json({
            user:user
        })
    }).catch(err=>{
        res.json({
            user:err,
            message:"error occured"
        })
    })
}

module.exports.updateUser=(req,res)=>{

    User.findByIdAndUpdate({_id:req.params.id},req.body)
    .then(user=>{
        res.json({
            user:user
        })
        
        }).catch(err=>{
            res.json({
                user:err
            })
    })
}

module.exports.getUser=(req,res)=>{
    User.find().sort({age:-1})
    .then(user=>{
        res.json({
            user:user
        })
    }).catch(err=>{
        res.json({
            user:err
        })
    })
}

module.exports.getpaginate=(req,res)=>{
    User.find({age:{$gt:10}}).then(user=>{
        res.json({
            user:user
        })
    })
    .catch(err=>{
        res.json({
            user:err
        })
    })

}
module.exports.deleteUser=(req,res)=>{
    User.findOneAndDelete({_id:req.params.id})
    .then(user=>{
        res.json({
            user:user
        })
       
    })
    .catch(err=>{
        res.json({
            user:err
        })
    })
}