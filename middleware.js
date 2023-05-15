const middle =(req,res,next)=>{
    const method = req.method
    console.log(method)
    const url = req.url
    console.log(url)
    const time = new Date().toDateString()
    console.log(time)
    next()

}
module.exports = middle