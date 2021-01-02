var sum = (a, b) => a + b
console.log(sum(2, 3))

//objetos literais

var createObject = () => ({ teste: 123 })
console.log(createObject())

//Gerar objetos com função contrutora

function Car() {
  this.foo = 'bar'
}

console.log(new Car())

// Hoisting - funções movidas para o topo do código
// não funciona com arrow functions

// maior utilidade e melhor escrita de funções

var obj = {
  showContext: function showContext() {
    setTimeout(() => {
      this.log('after 1 second')
    }, 1000);
  },
  log: function log(value){
    console.log(value)
  }
}
obj.showContext()

//a arrow function tem o contexto igual ao codigo que o envolve. Chamado contexto léxico.