const express = require('express')
const {products, people} = require('./data')
const app = express()

//send a JSON response. This method sends a response using JSON.stringfy
app.get('/',(req,res)=>{
    // res.json([{name:'Sushil'},{name:'karki'}])
    res.json(products)
})

app.listen(5000,()=>{
    console.log("Server is listining to a port ....")
})