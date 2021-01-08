// Generators
// são funções com pausa e retornam valores

function* hello(){
  console.log('hello')
  yield 1
  console.log('from')
  const value = yield 
  console.log(value)
  
}

const it = hello()

console.log(it.next())
console.log(it.next())
console.log(it.next('outside'))