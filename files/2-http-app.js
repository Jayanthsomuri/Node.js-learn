const http= require('http')
const {readFileSync}=require('fs');
//get all files
const homePage =readFileSync('./navbar-app/index.html')
const homeStyles =readFileSync('./navbar-app/style.css')
const homeImage =readFileSync('./navbar-app/logo.svg')
const homeLogic =readFileSync('./navbar-app/browser-app.js') 

const server = http.createServer((req,res)=>{
   // console.log(req.method)
    //console.log(req.url);
    const url=req.url;
    console.log(url)
    //home Page
    if(url ==='/')
    {res.writeHead(200,{'content-type':'text/html'})
    res.write(homePage)
    res.end()
    }
    //about page
    else if(url ==='/about'){
        res.writeHead(200,{'content-type':'text/html'})
    res.write("<h1>About Page</h1>")
    res.end()

    }
    //styles
    else if(url ==='/style.css'){
        res.writeHead(200,{'content-type':'text/css'})
    res.write(homeStyles)
    res.end()

    }
    //Image/logo
    else if(url ==='/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
    res.write(homeImage)
    res.end()

    }
    //Logic-js
    else if(url ==='/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
    res.write(homeLogic)
    res.end()

    }
    //404
    else{
        res.writeHead(404,{'content-type':'text/html'})
    res.write("<h1>page not found</h1>")
    res.end()
    }
})

server.listen(5000)