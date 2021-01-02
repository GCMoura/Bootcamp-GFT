// Default Function Arguments
//É possivel atribuir valores padrão para os argumentos da função

function multiply(a, b = 3){
  return a * b
}

console.log(multiply(5))

//lazy evaluation

function randomNumber() {
  return Math.floor(Math.random() * 10)
}

function multiply2(a, b = randomNumber()){
  return a * b
}

console.log(multiply2(5))
