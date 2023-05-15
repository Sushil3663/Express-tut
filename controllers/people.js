const { people } = require('../data')
const getPerson = (req, res) => {
    res.status(200).json({
        sucess: true,
        data: people
    })
}

const postPerson = (req, res) => {
    let { name } = req.body
    console.log(name)
    res.status(201).json({
        sucess: true,
        person: name
    })
}

const postmenPerson = (req, res) => {
    let { name } = req.body
    console.log(name)
    res.status(201).json({
        sucess: true,
        person: [...people, name]
    })
}

const putPerson = (req, res) => {
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
}

const deletPerson = (req,res)=>{
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
}

module.exports = {
getPerson,
postPerson,
postmenPerson,
putPerson,
deletPerson
}