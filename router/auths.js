const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    console.log(req.body)
    let { name } = req.body
    if (name) {
        res.status(200).send(`Welcome ${name}`)
    }
    else {
        res.status(401).send("Name not found here")
    }

})

module.exports = router