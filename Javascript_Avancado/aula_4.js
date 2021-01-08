// rest operator

function sum(...args){
  return args.reduce((acc, value) => acc + value, 0)
}

console.log(sum(5, 5, 6, 2, 3))

// spread operator - quebra os itens e repassa
// string, arrays, literal objects, objetos iteraveis

const str = 'Gabriel Moura'

function log(...args){
  console.log(args)
}

log(...str) //retorna uma lista com cada letra como elemento

//array
const arr = [1, 2, 3]
const arr2 = [...arr, 4, 5, 6]

console.log(arr2)

//objetos => constroi novos objetos
const obj = {
  test: 123
}

const obj2 = {
  ...obj,
  test2: 'hello'
}

console.log(obj2)