const authorize =(req,res,next)=>{
    const{user}=req.query;
    if(user==='Jayanth'){
    //http://localhost:5000/?user=Jayanth
        req.user={name:'Jayanth',id:3}
        next()
    }
    else{
        res.status(401).send("Unathorized")
    }
    
}
module.exports=authorize