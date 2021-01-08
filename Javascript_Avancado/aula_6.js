// iterators - symbols
// Symbol - identificador unico que não pode ser identificado

const unique = Symbol('hello')

const obj = {
  [unique]: 'Hello'
}

console.log(unique)
console.log(obj)

//well known symbols

Symbol.iterator

const arr = [1, 2, 3, 4]

const it = arr[Symbol.iterator]()

//é igual ao for(let i of lista)

//uma interface para consumir passo a passo uma lista

console.log(it.next()) //cada vez que chamar traz o proximo valor

const obj = {
  values: [1,2,3,4],
  [Symbol.iterator](){
    let i = 0

    return {
      next: () => {
        i++
        return {
          value: this.value[i - 1],
          done: i > this.values.length
        }
      }
    }
  }
}

const arr2 = [...obj]
console.log(arr)

