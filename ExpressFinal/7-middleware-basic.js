const express = require('express')
const app = express()

// req => middleware => res

const middle =(req,res,next)=>{
    const method = req.method
    console.log(method)
    const url = req.url
    console.log(url)
    const time = new Date().toDateString()
    console.log(time)
    next()

}

app.get('/',middle,(req,res)=>{
    res.send("Home")
   
})

app.get('/about',(req,res)=>{
    res.send("About")
})

app.listen(5000,()=>{
    console.log("Server is listening to a port.....")
})