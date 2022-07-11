const numbersContainer = document.querySelector('.numbers')

for (let i = 1; i < 33; i++) {
  const sector = document.createElement('div')
  sector.classList.add('sector')
  sector.innerText = i
  numbersContainer.appendChild(sector)
}