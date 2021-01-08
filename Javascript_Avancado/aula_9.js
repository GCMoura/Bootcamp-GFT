//fetch - async/await - eventEmitter

const simple = async () => {
  return 123
}

console.log(simple())

//await espera que outras prommises sejam resolvidas primeiro

// no NODE - eventEmitter

//primeiro importar o modulo Event

const eventEmitter = require('events')
const emitter = new eventEmitter()

emitter.on('User Logged', data => {
  console.log(data)
})

emitter.emit('User Logged', { user: 'Gabriel Moura'})

//no browser - eventTarget
