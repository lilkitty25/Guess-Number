//Definir variables score, highscore y un numero aleatorio
const scoreInitial = 20
let score = scoreInitial
let highscore = 0
const secretNumber = Math.trunc(Math.random() * 20) + 1
console.log(secretNumber)

//Eventos de los botones check y again
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess, typeof guess)
  if (!guess) {
    document.querySelector('.message').textContent = 'No number'
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number'
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').textContent = secretNumber
    document.querySelector('.number').style.width = '30rem'
    if (score > highscore) {
      highscore = score
      document.querySelector('.highscore').textContent = highscore
    }
  } else {
    score--
    document.querySelector('.message').textContent =
      guess > secretNumber ? 'Too high' : 'Too low'
    document.querySelector('.score').textContent = score
    if (score === 0) {
      document.querySelector('.message').textContent = 'You lost the game'
    }
  }
})
