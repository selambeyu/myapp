const User=require('../models/user');
const bcrypt=require('b')




module.exports.register=(req,res)=>{
    const user=new User({
        username:req.body.username,
        password:req.body.password,
        age:req.body.age
    })
    bcrypt.hash(user.password,10,(err,hash)=>{
        if(err)throw err;
        user.password=hash;
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
    })

    
}


module.exports.login=(req,res)=>{
    User.findOne({username:req.body.username}).then(user=>{
        bcrypt.compare(req.body.password,user.password,(isMatch)=>{
            if(isMatch){
                const token=jwt.sign({user:user},"sercret",{expiresIn:604500});
                return res.json({
                    token:token,
                    success:true,
                    message:"user Logged in"
                })
            }
        })
          
        
    }).catch(err=>{
        res.json({
            user:err
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


