const http = require('http')
const {readFileSync} = require('fs')
const home = readFileSync('./navbar-app/index.html')
const homeStyle = readFileSync('./navbar-app/styles.css')
const homeLogo = readFileSync('./navbar-app/logo.png')
const homeJs =readFileSync('./navbar-app/script.js')

const server = http.createServer((req,res)=>{
    // console.log(req.method)
    // console.log(req.url)
    // res.writeHead(404, {'content-type': 'text/html'})
    // res.write('<h1>Home Page</h1>')
    // res.end()
    //Home Page
    if(req.url === '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(home)
        res.end()
    }
     //Style Page
     else if(req.url === '/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyle)
        res.end()

    }
     //Logo Page
     else if(req.url === '/logo.png'){
        res.writeHead(200,{'content-type':'image/png+xml'})
        res.write(homeLogo)
        res.end()

    }
     //Js Page
     else if(req.url === '/script.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homeJs)
        res.end()

    }
    //About Page
    else if(req.url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()

    }
    //Error Page
    else{
        res.writeHead(404,{'content-type': 'text/html'})
        res.write('OOps! Error Page .....')
        res.end()

    }
   


})
server.listen(5000)