const authorize = (req,res,next)=>{
    const { user } = req.query
    if(user === 'sushil'){
        console.log('Authorize')
        // req.user[{name:'sushil'}]
        next()
    }
    else{
        console.log('UnAuthorized')
        res.status(401).send("UnAuthorized")
        
    }
    
  
}
module.exports = authorize