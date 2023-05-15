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

//  app.get('/api/v1/query',(req,res)=>{
//     const {query}= req.query
//     console.log(req.query)
//     res.send("Sushil")
//  })

 app.get('/api/v1/query',(req,res)=>{
    const {search, limit } = req.query
    let pro = [...products]
    if(search){
    pro= pro.filter((element)=>{
        return element.name.startsWith(search)

    })
}
if(limit){
    pro = pro.slice(0,Number(limit))
}
if(pro.length<1){
    // res.status(200).send("No product match found")
    return res.status(200).json({sucess: true, data:[]})

}
res.status(200).json(pro)
 })
app.listen(5000, () => {
    console.log('server is listening to a port....')
})