// Promisses e callbacks

function one(callback){
  setTimeout(() => {
    callback('First data')
  }, 1000);
}

function two(callback){
  setTimeout(() => {
    callback('Second data')
  }, 1000);
}

function all() {
  one(function (data){
    var dataOne = data.split('')

    two(function(data2){
      var dataTwo = data2.split('')

      setTimeout(() => {
        console.log(dataOne, dataTwo)
      }, 1000);
    })
  })
}

all()

//Promises

const onePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('First data')
  }, 1000);
})

const twoPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Second data')
  }, 1000);
})

onePromise
  .then(data => {console.log(data); return twoPromise})
  .then(data2 => console.log(data2))

//pending - pendente de execução
//fullfilled - acabou de ser executada
//rejected - foi rejeitada por erro

//em paralelo
Promise.all([onePromise, twoPromise]).then(data => {
  console.log(data)
})

//usando Promise.race -> a que for resolvida primeiro será retornado