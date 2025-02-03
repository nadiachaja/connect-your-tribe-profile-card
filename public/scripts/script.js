
const flipButton = document.querySelector('button')
const card = document.querySelector('article')

flipButton.addEventListener('click', flipper)

function flipper() {
  card.classList.toggle('flip')
}
