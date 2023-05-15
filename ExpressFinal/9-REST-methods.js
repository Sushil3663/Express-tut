const express = require('express')
const app = express()
const { people } = require('./data')

//static assets
app.use(express.static('./methods-public'))

//parse form data
//express.urlencoded is a built in middleware function Express.
app.use(express.urlencoded({ extended: false }))

//parse json
app.use(express.json())

app.get("/api/people", (req, res) => {
    res.status(200).json({
        sucess: true,
        data: people
    })
})


app.post("/api/people", (req, res) => {
    let { name } = req.body
    console.log(name)
    res.status(201).json({
        sucess: true,
        person: name
    })
})

app.post("/api/postmen/people", (req, res) => {
    let { name } = req.body
    console.log(name)
    res.status(201).json({
        sucess: true,
        person: [...people, name]
    })
})



app.put('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body
    console.log(id, name)
    // res.send("Changed")
    let person = people.find((person) => 
         person.id === Number(id))

    if(!person){
        return res.status(404).json({sucess:false,msg:`No person with id ${id}`})
    }
    let persons = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json({sucess:true,data:persons})
})

app.post('/login', (req, res) => {
    console.log(req.body)
    let { name } = req.body
    if (name) {
        res.status(200).send(`Welcome ${name}`)
    }
    else {
        res.status(401).send("Name not found here")
    }

})

app.delete('/api/people/:id',(req,res)=>{
    const { id } = req.params
    console.log(id)
    let person = people.find((person) => 
         person.id === Number(id))

    if(!person){
        return res.status(404).json({sucess:false,msg:`No person with id ${id}`})
    }
    let persons = people.filter((person) => {
        return person.id !== Number(id)
    })
    res.status(200).json({sucess:true,data:persons})
})


app.listen(5000, () => {
    console.log('Server is listening to a port')
})