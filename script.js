//Definir variables score, highscore y un numero aleatorio
const INITIAL_SCORE = 20
const MAX_NUMBER = 20

initData()

function initData() {
  let score = INITIAL_SCORE
  let highscore = 0
  let number = Math.trunc(Math.random() * MAX_NUMBER) + 1
}
//seleccionar todos los elementos del DOM que necesitamos
const messageField = document.querySelector('.message')
const scoreField = document.querySelector('.score')
const highscoreField = document.querySelector('.highscore')
const numberField = document.querySelector('.number')
const guessField = document.querySelector('.guess')
const checkBtn = document.querySelector('.check')
const againBtn = document.querySelector('.again')

console.log(scoreField)
console.log(scoreField.textContent)
console.log(highscoreField)
console.log(highscoreField.textContent)

//addEventListener para los botones
checkBtn.addEventListener('click', checkNumber)

function checkNumber() {
  //obtenemos el numero del numero pulsado
  //si eno es numero que lo corrija
  //si es un muero y no es correcto, entonces compobamos score ¿perdemos aprtida?
  // actualizamos nuestras variables
  //si es numero y es correcto, entonces actualizamos score y compobamos highscore
}
