// const http= require('http')
// const server=http.createServer((req,res)=>{
// res.write("Hi this is our frst webpage!!!"
// res.end()
// })
// server.listen(5000)


const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.end("welcome to the home Page")

    }
    if(req.url ==='/about'){
        res.end("here is our short history")
    }
    res.end(`
    <h1>OOps!</h1>
    <p>We cant seem to find a page you are looking for</p>
    <a href="/">back home</a>
    
    `)
})

server.listen(5000)