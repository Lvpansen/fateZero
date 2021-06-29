const net = require('net')
const worker = require('./worker')

net
  .createServer((connection) => {
    console.log('connetction')
    worker(connection)
  })
  .listen(80)