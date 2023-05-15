const express = require('express');
const path =require('path');

const app = express(); ///server created
 
// set up static and middleware. app.use is used to setup middleware
app.use(express.static('./public'))

app.get('/',(req,res)=>{
    // res.status(200).send("Home Page")
    // res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
 

})
app.get('/about',(req,res)=>{
    res.status(200).send("About Page")
})
app.all('*',(req,res)=>{
    res.status(404).send("Resource Error!")
})


app.listen(5000,()=>{
    console.log("Listening to a server...")
})