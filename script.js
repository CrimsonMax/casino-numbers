const numbersContainer = document.querySelector('.numbers')
const rollButton = document.querySelector('.roll')

const allSectors = 32

for (let i = 1; i <= allSectors; i++) {
  const sector = document.createElement('div')
  sector.classList.add('sector')
  sector.innerText = i
  numbersContainer.appendChild(sector)
}

function randomNumber() {
  const timesHighlight = 50
  const secondsInterval = 100
  
  let previous = document.querySelector('.win')

  if (previous) {
    previous.classList.remove('win')
  }

  const interval = setInterval(() => {
    rollButton.removeEventListener('click', randomNumber)
    
    const randomSector = highlightSector()
    randomSector.classList.add('win')

    setTimeout(() => {
      randomSector.classList.remove('win')
    }, secondsInterval)
  }, secondsInterval)

  setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
      const randomSector = highlightSector()
      randomSector.classList.add('win')

      rollButton.addEventListener('click', randomNumber)
    }, secondsInterval)
  }, timesHighlight * secondsInterval)
}

function highlightSector() {
  const sectors = document.querySelectorAll('.sector')
  let randomIndex = Math.floor(Math.random() * sectors.length)

  return sectors[randomIndex]
}

rollButton.addEventListener('click', randomNumber)