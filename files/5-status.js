const express =require('express');
const path = require('path')
const app = express()

//Setup static and middleware
//The files which should be in use by static should be available the public folder for sure
app.use(express.static('./public'))

// app.get('/',(req,res)=>{
// res.sendFile(path.join(__dirname,'./navbar-app/index.html'))
// we can also (path.resolve) since __dirname has functonalitu
//adding to static assests (SSR)(server side rendering)
// })
app.all('*',(req,res)=>{
   res.status(404).send("Resource not found") 
})
app.listen(5000,()=>{
    console.log("server is listening on port 5000.../")
})