
// Express Routers are a way to organize your Express application such that your primary app.js file does not become bloated and difficult to reason about.

const express = require('express')
const app = express()


//static assets
app.use(express.static('./methods-public'))

//parse form data
//express.urlencoded is a built in middleware function Express.
app.use(express.urlencoded({ extended: false }))

//parse json
app.use(express.json())

const peopleRoute = require('./router/people')
const authRouter = require('./router/auths')

app.use('/api/people',peopleRoute)
app.use('/login',authRouter)




app.listen(5000, () => {
    console.log('Server is listening to a port')
})