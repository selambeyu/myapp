module.exports.verifyTokent=(req,res)=>{
const beareHeader=req.headers['authorization'];
if(typeof beareHeader!=='undefined'){
    const bearer=beareHeader.split(' ');
    const bearerToken=bearer[1];
    req.token=bearerToken;
    next();
}else{
    res.sendStatus(403);
}


}