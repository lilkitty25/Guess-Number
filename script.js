//Definir variables score, highscore y un numero aleatorio
const INITIAL_SCORE = 20
const MAX_NUMBER = 20

//
let number, highscore, score

//seleccionar todos los elementos del DOM que necesitamos
const messageField = document.querySelector('.message')
const scoreField = document.querySelector('.score')
const highscoreField = document.querySelector('.highscore')
const numberField = document.querySelector('.number')
const guessField = document.querySelector('.guess')
const checkBtn = document.querySelector('.check')
const againBtn = document.querySelector('.again')

//si estado de mi aplicacion se basa en:
//-number: múmero aleatorio
// score
//highscore
//si uno de estos cambia

initData()

//function
function initData() {
  score = INITIAL_SCORE
  scoreField.textContent = score
  highscore = localStorage.getItem('highscore') || 0
  number = Math.trunc(Math.random() * MAX_NUMBER) + 1
  console.log(number, '*****************************')
}

//
checkBtn.addEventListener('click', checkNumber)

againBtn.addEventListener('click', playAgain)

//function
function checkNumber() {
  //obtenemos el numero del numero pulsado
  const guess = Number(guessField.value)
  //adivinar un numeo entre el 1 y el 20, mostrar mensaje de adivinar

  if (!guess || guess < 1 || guess > 20) {
    displayMessage('🤔Please enter a number between 1 and 20')
    //si es numero y es correcto, entonces actualizamos score y compobamos highscore, ademas de cambiar un poco el css
  } else if (guess === number) {
    displayMessage('🥳Correct number')
    numberField.textContent = number
    document.body.style.backgroundColor = '#60b347'
    numberField.style.backgroundColor = '#fff'
    numberField.style.border = '3px solid rgb(17, 63, 4)'
    checkBtn.disabled = true
    if (score > highscore) {
      highscore = score
      highscoreField.textContent = highscore
      localStorage.setItem('highscore', highscore)
    }
  } else {
    //si es un numero y no es correcto, entonces compobamos score ¿perdemos partida?
    if (score > 1) {
      const message = guess > number ? '😬Too high' : '😬Too low'
      displayMessage(message)
    } else {
      displayMessage('😭You lost the game')
      checkBtn.disabled = true
    }
    // actualizamos nuestras variables
    score--
    scoreField.textContent = score
  }
}

function playAgain() {
  initData()
  numberField.textContent = '?'
  document.body.style.backgroundColor = '#222'
  numberField.style.backgroundColor = '#222'
  numberField.style.border = 'none'
  numberField.style.width = '15rem'
  numberField.style.height = '10rem'
  checkBtn.disabled = false
  //actualizo el campo highscore y highscore con localstorage, pero si no hay highscore dejo a 0 y highscore pasalo a number
  highscore = localStorage.getItem('highscore') || 0
  highscoreField.textContent = highscore
  localStorage.setItem('highscore', highscore)
}

//function para que aparezca el mensaje
function displayMessage(message) {
  messageField.textContent = message
}

//al darle a enter el numero se acepta
document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    checkNumber()
  }
})
