//STREAMS
//Writeable
//Readable
//Duplex(both read and write)
//Transform

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const { createReadStream } = require('fs')
const stream= createReadStream('./content/big.txt',{highwaterMark:90000
})
stream.on('data',(result)=>
{
  console.log(result)
})

stream.on('error', (err) => console.log(err))

