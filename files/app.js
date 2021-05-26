// const http= require('http')
// const {readFileSync}=require('fs');
// //get all files
// const homePage =readFileSync('./navbar-app/index.html')
// const homeStyles =readFileSync('./navbar-app/style.css')
// const homeImage =readFileSync('./navbar-app/logo.svg')
// const homeLogic =readFileSync('./navbar-app/browser-app.js') 

// const server = http.createServer((req,res)=>{
//    // console.log(req.method)
//     //console.log(req.url);
//     const url=req.url;
//     console.log(url)
//     //home Page
//     if(url ==='/')
//     {res.writeHead(200,{'content-type':'text/html'})
//     res.write(homePage)
//     res.end()
//     }
//     //about page
//     else if(url ==='/about'){
//         res.writeHead(200,{'content-type':'text/html'})
//     res.write("<h1>About Page</h1>")
//     res.end()

//     }
//     //styles
//     else if(url ==='/style.css'){
//         res.writeHead(200,{'content-type':'text/css'})
//     res.write(homeStyles)
//     res.end()

//     }
//     //Image/logo
//     else if(url ==='/logo.svg'){
//         res.writeHead(200,{'content-type':'image/svg+xml'})
//     res.write(homeImage)
//     res.end()

//     }
//     //Logic-js
//     else if(url ==='/browser-app.js'){
//         res.writeHead(200,{'content-type':'text/javascript'})
//     res.write(homeLogic)
//     res.end()

//     }
//     //404
//     else{
//         res.writeHead(404,{'content-type':'text/html'})
//     res.write("<h1>page not found</h1>")
//     res.end()
//     }
// })

// server.listen(5000)


//Express -basics
// const express =require('express');
// const app = express()
// app.get('/',(req,res)=>{
//     console.log("user hit the resource")
// res.status(200).send("Home Page")
// })


// app.get('/about',(req,res)=>{
//     res.status(200).send("About Page")
// })
// app.all('*',(req,res)=>{
//     res.status(404).send('<h1>Resource not found</h1>')
// })
// app.listen(5000,()=>{
//     console.log("server is listening on port 5000.../")
// })
//app.get
//app.post
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen
// const express =require('express');
// const path = require('path')
// const app = express()

//Setup static and middleware
//The files which should be in use by static should be available the public folder for sure
// app.use(express.static('./public'))

// app.get('/',(req,res)=>{
// res.sendFile(path.join(__dirname,'./navbar-app/index.html'))
// we can also (path.resolve) since __dirname has functonalitu
//adding to static assests (SSR)(server side rendering)
// })
// app.all('*',(req,res)=>{
//    res.status(404).send("Resource not found") 
// })
// app.listen(5000,()=>{
//     console.log("server is listening on port 5000.../")
// })
// const express = require('express')
// const app = express()
// const { products } = require('./data')

// app.get('/', (req, res) => {
//   res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
// })
// app.get('/api/products', (req, res) => {
//   const newProducts = products.map((product) => {
//     const { id, name, image } = product
//     return { id, name, image }
//   })

//   res.json(newProducts)
// })
// app.get('/api/products/:productID', (req, res) => {
//   // console.log(req);
//   // console.log(req.params)
//   const { productID } = req.params;
//   const singleProduct = products.find((product) => product.id === Number(productID))

//   if (!singleProduct) {
//     return res.status(404).send("Product Does Not Exist")
//   }
//   app.get('/api/products/:prodcutID/reviews/:reviewsID', (req, res) => {
//     console.log(req.params)
//     res.send('hello world')
//   })
//   return res.json(singleProduct)

// })
// app.get('/api/v1/query', (req, res) => {
//   //console.log(req.query);
//   const { search, limit } = req.query
//   let sortedProducts = [...products];


//   if (search) {
//     sortedProducts = sortedProducts.filter((product) => {
//       //http://localhost:5000/api/v1/query?search=a(search gonna search the by alphabets)
//       return product.name.startsWith(search)
//     })
//   }
//   if (limit) {
//     sortedProducts = sortedProducts.slice(0, Number(limit))
//     //http://localhost:5000/api/v1/query?limit=4(limit is used to limit the stuff in http module)
//   }
//   if (sortedProducts.length < 1) {
//     //res.status(200).send('NO products matched your search')
//     //http://localhost:5000/api/v1/query?search=gh
//     return res.status(200).json({ success: true, data: [] })
//     //http://localhost:5000/api/v1/query?search=b
//   }
//      res.status(200).json(sortedProducts)
//   //http://localhost:5000/api/v1/query?name=Jayanth&id=4
//   //so we can write queries by query
//   res.send('hello world')

// })
// app.listen(5000, () => {
//   console.log("server is listinening at 5000.../")
// })
// const express = require('express')
// const app = express()
// const morgan=require('morgan')
// const logger=require('./logger')
// const authorize=require('./authorize')
// //req= >middleware=>res
// //1.use vs route
// //2.options -our own/express/thirdparty

// // const logger =(req,res,next)=>{
// //   const method=req.method;
// //   const url=req.url;
// //   const time=new Date().getFullYear()
// //   console.log(method,url,time)
// //    next()
// // }
// //app.use([authorize,logger])
// //Use of multiple middleware function by keeping them in an array
// // api/home/about/products
// //app.use(express,static('./public'))
// app.use(morgan('tiny'))
// app.get('/',(req,res)=>{
 
// res.send("Home")
// })
// app.get('/about', (req, res) => {
//   res.send('About')
// })
// app.get('/api/products',(req,res)=>{
 
//   res.send("Prodcuts")
//   })
//   app.get('/api/items',(req, res) => {
//     console.log(req.user)
//     res.send('Items')
//   })
  

// app.listen(5000, () => {
//   console.log('Server is listening on port 5000....')
// })
// const express = require('express')
// const app = express()
// let {people}=require('./data')
// //static asset
// app.use(express.static('./methods-public'))
// //parse form data
// app.use(express.urlencoded({extended :false}))
// app.get('/api/people',(req,res)=>{
// res.status(200).json({success:true,data:people})
// })
// app.post('/login',(req,res)=>{
//   const{name} =req.body;
//   if(name){
//     return res.status(200).send(`welcome${name}`)
//   }
// res.status(401).send('Please Provide Credentials')
// })
// app.listen(5000, () => {
//    console.log('Server is listening on port 5000....')
//  })
const express = require('express')
const app = express()
let { people } = require('./data')

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())
app.post('/login', (req, res) => {
  const { name } = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }

  res.status(401).send('Please Provide Credentials')
})
app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})

app.post('/api/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, person: name })
})

 app.post('/api/postman/people', (req, res) => {
   const { name } = req.body
   if (!name) {
     return res
       .status(400)
       .json({ success: false, msg: 'please provide name value' })
   }
   res.status(201).send({success:true,data:[...people,name]})
   })
 



app.put('/api/people/:id', (req, res) => {
  const { id } = req.params
  const { name } = req.body

  const person = people.find((person) => person.id === Number(id))

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` })
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name
    }
    return person
  })
  res.status(200).json({ success: true, data: newPeople })
})

app.delete('/api/people/:id', (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id))
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` })
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  )
  return res.status(200).json({ success: true, data: newPeople })
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})