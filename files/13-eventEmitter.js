//EVENTS
//->EVENT -Driven programming
//->used heavily in Node.js
//Events
const EventEmitter=require('events');
const customEmitter=new EventEmitter()

//on -> listen for an event
//emit -> emit an event

customEmitter.on('response',(name,id)=>{
    console.log(`data received:${name} with id:${id}`)
})


customEmitter.on('response',()=>{
    console.log(`some other logic`)
})
customEmitter.emit('response','Jayanth',32)
