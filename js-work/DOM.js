const greeting = document.getElementById('greeting')
const nameInput = document.getElementById('nameInput')
const changeBtn = document.getElementById('changeBtn')
const themeBtn = document.getElementById('themeBtn')
const liveText = document.getElementById('liveText')
const card = document.querySelector('.card')

let clickCount = 0

nameInput.addEventListener('input', (e) => {
    liveText.textContent = `Вы ввели: ${nameInput.value} | Кликов по кнопке: ${clickCount}`
    if (!nameInput.value) {
        liveText.textContent = 'Текст будет меняться здесь...'
    }
})

changeBtn.addEventListener('click', (e) => {
    const name = nameInput.value.trim()
    
    if (!name) {
        alert("Сначала введите имя!")
        greeting.textContent = 'Привет, гость!'
        return
    }

    greeting.textContent = `Привет, ${nameInput.value}!`
    clickCount++
    liveText.textContent = `Вы ввели: ${nameInput.value} | Кликов по кнопке: ${clickCount}`
})

themeBtn.addEventListener('click', (e) => {
    card.classList.toggle('highlight')
})