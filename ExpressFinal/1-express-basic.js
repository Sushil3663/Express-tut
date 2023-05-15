//Two way to create server
// Method in express
//app.listen()
//app.get(); - GET - read data
//app.put() - PUT - update data
//app.post() - POST -insert data
//app.delete() -DELETE - delete data
//app.all()
//app.use()

//1st way

// const app = require('express')();

// app.listen(3000,()=>{
//     console.log("Server is listening to a port....")
// })

//2nd way

// const express = require('express')

// const app = express(); // create server

// app.get('/',(req,res)=>{
//     res.send("Home Page")

// })

// app.listen(5000,()=>{
//     console.log("Server is listening to a port....")
// })

const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("Home Page")
})

app.get('/about',(req,res)=>{
    res.status(200).send('About Page')
})

app.all('*',(res,req)=>{
    res.status(404).send('<h1>Oops! Error Page</h1>')
})

app.listen(5000,()=>{
    console.log("Listening to a server.....")
})