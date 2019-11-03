const mogoose=require('mongoose');
mogoose.set('useCreateIndex',true);
mogoose.set('userFindAndModify',false);

const url='mongodb://localhost:27017/myapp'

mogoose.connect(url,{
    useUnifiedTopology: true,
    useNewUrlParser: true
});
db=mogoose.connection;


db.on('error',()=>{
    console.log("is not connected")
})

db.on('open',()=>{
    console.log(`the database is connected to ${url}`)
})


module.exports=db;