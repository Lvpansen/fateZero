const RequestParser = require('./requestParser')
const makeResonse = require('./makeResponse')

module.exports = (connection) => {

  const parser = new RequestParser()

  connection.on('data', (buffer) => {
    parser.append(buffer)
  })

  parser.on('finish', (message) => {
    // plugin 0
    // ...
    // make response
    console.log(makeResonse(message))
    connection.end(makeResonse(message))
  })
}