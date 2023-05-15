const express = require('express')
const app = express()
const middle = require('./middleware')
const authorize = require('./authorize')
const morgan =require('morgan')
// req => middleware => res

// app.use('/api',middle)
// order matter and should be in array

//1. use vs route
//2. our own/express/ thirdy party
// express
// app.use(express.static('./public'))

//thirdparty -npm morgan
app.use(morgan('tiny'))

// own
// app.use([middle,authorize])

app.get('/',(req,res)=>{
    res.send("Home")
   
})

app.get('/about',(req,res)=>{
    res.send("About")
})

app.get('/api',(req,res)=>{
    res.send("API")
    
    // console.log(req.user)
})

app.get('/api/v1',(req,res)=>{
    res.send("Api Volume")
})
app.listen(5000,()=>{
    console.log("Server is listening to a port.....")
})