
//Modules
// const secret ="super secret"
// const Jayanth="jayanth"
// const nikhil ="nikhil"

// const sayHi = (name)=>{
//     console.log(`Hello there ${name}`)
// }

//CommonJs,every file is module(by default)
//Modules-Encapuslated Code (only share minimum)

// const names = require('./4-names');
// const sayHi = require('./5-utils');
// const data= require('./6-alternative');
// require('./7-mind-grenade')
//  sayHi("Somuri")
//  sayHi(names.Jayanth)
//  sayHi(names.nikhil)
//SYNC vs ASYNC

//npm-global command,comes which comes with node
//npm --version

//local dependency - use it only in this particular project
//npm i <packageName>

//NPM (Node Package Manager) -->commands

//global depedency - use it in any project
//npm install-g<packageName> (windows)
//sudo npm install -g<packageName> (mac)

//package.json-manifest file(stores important info about project/package)
//manual approach (create package.json in the root,create properties etc)
//npm init (step by step,press enter to skip)
//npm init -y(everything default)
//npm i <package|dependency name> installs the package locally
//npm start (used to give output directly if we share the code to dependency)
//npm run dev(This command helps to work parallely with saving and executes the output)
//npm uninstall <package name>

// const _ = require('lodash');
// const items = [1, [2, [3, [4]]]]
// const newItems= _.flattenDeep(items);
// console.log(newItems);
// console.log("Hello this Jayanth somuri")


//started operating system process
// console.log('first')
// setTimeout(()=>{
//     console.log('second')
// },0)
// console.log('third')
// //completed and exited operating system process

// setInterval(()=>{
//     console.log("hello world")
// },2000)
// console.log("i will run first")
//process stays alive unless
//Kill process control+c
//unexpected error

// const http = require('http')

// const server = http.createServer((req, res) => {
//   console.log('request event')
//   res.write('Hello World')
// })

// server.listen(5000, () => {
//   console.log('Server listening on port : 5000....')
// })
// const http= require('http')
// const server=http.createServer((req,res)=>{
// if(req.url==='/'){
//  res.end('Home Page')
// }
// if(req.url==='/about'){
//     res.end('AboutPage')
//     //BLOCKING CODE !!!
//     for(let i=0;i<1000;i++){
//         for(let j=0;j<1000;j++){
//             console.log(`${i} ${j}`)
//     }
//    }
// }

// })
// server.listen(5000,()=>
// {
// console.log('server listening on port 5000...>')
// })

// const { readFile,writeFile } = require('fs').promises
// // const util=require('util');
// // const readFilePromise =util.promisify(readFile)
// // const writeFilePromise =util.promisify(writeFile)
// const start = async () => {
//     try {
//         const first = await readFile('./content/first.txt','utf-8');
//         const second = await readFile('./content/second.txt','utf-8');
//         await writeFile(
//             './content/result-mind-grenade.txt',
//         `This is Awesome:${first} ${second}`,{flag:'a'})
//         console.log(first, second)
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
// start()


// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err)
//             }
//             else {
//                 resolve(data)
//             }
//         })

//     })
// }

// getText('./content/first.txt')
// .then((result)=>console.log(result))
// .catch((err)=>console.log(err))


//Events
// const EventEmitter=require('events');
// const customEmitter=new EventEmitter()

// //on -> listen for an event
// //emit -> emit an event

// customEmitter.on('response',(name,id)=>{
//     console.log(`data received:${name} with id:${id}`)
// })


// customEmitter.on('response',()=>{
//     console.log(`some other logic`)
// })
// customEmitter.emit('response','Jayanth',32)
  
// const http = require('http')

// // const server = http.createServer((req, res) => {
// //   res.end('Welcome')
// // })

// // Using Event Emitter API
// const server = http.createServer()
// // emits request event
// // subcribe to it / listen for it / respond to it
// server.on('request', (req, res) => {
//     console.log("req sent!!!")
//   res.end('Welcome')
// })
// server.listen(5000,()=>{
//     console.log('sending request--->')
// })


//STREAMS
//Writeable
//Readable
//Duplex(both read and write)
//Transform
// const{writeFileSync} =require('fs')
// for(let i=0;i<10000;i++){
//   writeFileSync('./content/big.txt',`Hello world this is :${i}th time\n`,{flag:'a'})
// }
const { createReadStream } = require('fs')
const stream= createReadStream('./content/big.txt',{highwaterMark:90000
})
stream.on('data',(result)=>
{
  console.log(result)
})


// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
stream.on('error', (err) => console.log(err))

