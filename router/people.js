const express = require('express')
const router = express.Router()

const { getPerson, postPerson, postmenPerson, putPerson, deletPerson } =require('../controllers/people')

//router.route('/').get(getPerson).post(postPerson)
//router.route('/').post(postmenPerson)
//router.route('/').put(putPerson).delete(deletePerson)

router.get("/", getPerson)
router.post("/", postPerson )
router.post("/postmen", postmenPerson)
router.put('/:id',putPerson )
router.delete('/:id',deletPerson)

module.exports = router