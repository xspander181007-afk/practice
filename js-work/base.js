const userName = 'Дмитрий'
let userAge = 19
let isStudent = true

console.log(
    `Привет, меня зовут ${userName}, мне ${userAge} лет. Студент: ${isStudent}`
)

let ageInput = "17";
let hasPass = true;
let isHoliday = false;

let age = Number(ageInput)
let canEnter = (age >= 18 && hasPass) || isHoliday
console.log(
    `Доступ разрешен: ${canEnter ? 'да' : 'нет'}`
)

for (let i = 1; i <= 15; i += 1) {

    if (i === 7) continue
    if (i === 12) break

    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
    } else if (i % 3 === 0) {
        console.log('Fizz')
    } else if (i % 5 === 0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}

const calculate = (a, b, op = '') => {
    if (op === '/' && b === 0) return 'Ошибка: деление на ноль'
    
    let result = null

    if (op === '*') {
        result = a * b
    } else if (op === '-') {
        result = a - b
    } else if (op === '+') {
        result = a + b
    } else if (op === '/') {
        result = a / b
    } else {
        return 'Неизвестная операция'
    }
    return result
}

function createCounter(startValue) {
    let count = startValue

    return {
        increase() {count++},
        decrease() {count--},
        getValue() {return count}
    }
}

console.log(calculate(10, 5, "+"));
console.log(calculate(10, 0, "/"));

const myCounter = createCounter(5);
myCounter.increase();
myCounter.increase();
myCounter.decrease();
console.log(myCounter.getValue());


const cart = [
    {
    title: "Футболка",
    price: 1500
    },
    {
    title: "Кепка",
    price: 800
    }
]

function addToCart(cart, title, price) {
    cart.push({title, price})
}

function removeLastItem(cart) {
    cart.pop()
}

function getTotalPrice(cart) {
    let total = 0
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price
    }
    return total
}

addToCart(cart, "Кроссовки", 4500)
removeLastItem(cart)
addToCart(cart, "Носки", 300)
console.log("Итого к оплате:", getTotalPrice(cart))