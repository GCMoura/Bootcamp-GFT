const dino = document.querySelector('.dino')
const background = document.querySelector('.background')
let score = document.querySelector('.score')
let windowWidth = document.body.clientWidth
let isGameOver = false
let isJumping = false
let position = 155
let points = 0
let cactusSpeed = 10

//audios
let gameOverSound = document.querySelector('.game-over-sound')
let jumpSound = document.querySelector('.jump')
let powerUpSound = document.querySelector('.powerUp')

function handleKeydown(event) {
  if(event.keyCode === 32){
    if(!isJumping){
      jump()
    }
    if(isGameOver){
      document.location.reload()
    }
  }
}

function jump() {
  
  isJumping = true
  let upInterval = setInterval(() => {
    if(position >= 300) {
      clearInterval(upInterval)
      //descendo
      let downInterval = setInterval(() => {
        if(position <= 155){
          clearInterval(downInterval)
          isJumping = false
        } else {
          position -= 4
          dino.style.bottom = position + 'px'
        }
      })
    } else{
      //subindo
      position += 70
      dino.style.bottom = position + 'px'
      jumpSound.play()
    }

  }, 20)
}

function createCactus() {
  const cactus = document.createElement('div')
  let cactusPosition = document.body.clientWidth - 80
  let randomTime = Math.random() * 6000

  if (isGameOver) return
  
  cactus.classList.add('cactus')
  background.appendChild(cactus)
  cactus.style.left = cactusPosition + 'px'

  let leftInterval = setInterval(() => {
    
    if(cactusPosition < -60){
      clearInterval(leftInterval)
      background.removeChild(cactus)
    } else if(cactusPosition > 0 && cactusPosition < 110 && position <= 200 ){
      //game over
      gameOverSound.play()
      clearInterval(leftInterval)
      isGameOver = true
      document.body.innerHTML = '<h3 class="game-over">Game Over</h3>'
      document.body.innerHTML += '<h3 class="game-over">Press Space to new game</h3>'
    } else {
      cactusPosition -= cactusSpeed
      cactus.style.left = cactusPosition + 'px'
    }
    if(cactusPosition <= 60 && cactusPosition >= 59){
      powerUpSound.play()
      points += 100
      score.innerHTML = points
      if(points % 1000 == 0){
        cactusSpeed += 2
      }
    }
  }, 20)
  
  setTimeout(createCactus, randomTime)
}

document.addEventListener('keydown', handleKeydown)
createCactus()