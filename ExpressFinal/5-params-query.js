const express = require('express')
const { products } = require('./data')

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1> <a href = "/api/product">Product</a>')
})

app.get('/api/product', (req, res) => {
    const newElement = products.map((element) => {
        const { id, name, price } = element;
        return { id, name, price }
    })
    res.json(newElement)
})

// 1st way
// app.get('/api/product/1',(req,res)=>{
//     const singleProduct = products.find((element)=>{
//        return element.id === 1
//     })
//     res.json(singleProduct)

//  })

//2nd way
//: id is called route/url parameter
// http://hn.algolia.com/api/v1/search?query=foo&tags=story. query=foo&tags=story is called query parameter. This is set up in the server
app.get('/api/product/:id', (req, res) => {
    //req.params take id in string
    // console.log(req.params)
    const { id } = req.params;
    let singleProduct = products.find((element) => {
        return element.id === Number(id)
    })

    if (!singleProduct) {
        return res.status(404).send("Product Doesnot Exit")
    }
    else{res.json(singleProduct)
    // console.log(singleProduct)
    }
})

app.get('/api/product/:id/review/:rid',(req,res)=>{
    res.send("Hello world")
    console.log(req.params)
 })

app.listen(5000, () => {
    console.log('server is listening to a port....')
})