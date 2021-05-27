//STREAMS
//Writeable
//Readable
//Duplex(both read and write)
//Transform
const{writeFileSync} =require('fs')
for(let i=0;i<10000;i++){
  writeFileSync('./content/big.txt',`Hello world this is :${i}th time\n`,{flag:'a'})
}
