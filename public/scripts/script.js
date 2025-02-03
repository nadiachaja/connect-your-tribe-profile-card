console.log("hoi")

const flipButton = document.querySelector('button')
console.log(flipButton)
const card = document.querySelector('article')
console.log(card)

flipButton.addEventListener('click', flipper)

function flipper() {
  console.log("flip functie")
  

  card.classList.toggle('flip')
}
