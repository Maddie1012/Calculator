let buttons = document.querySelectorAll('.numbers__circle');
let result = document.querySelector('.result__value');
let valueOperation = document.querySelector('.value__operation');
let numAndOperations = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '/', '*', '%', '-', '+', ','];
const maxLength = 10;

function writeNum(event) {
    let value = event.target.textContent
    let isInArr = numAndOperations.includes(value)
    if(isInArr && result.textContent.length <= maxLength) {
        result.textContent += value
    }
}

function deleteLastValue() {
    let curText = result.textContent;
    let newText = curText.slice(0, -1);
    result.textContent = newText;
}

function clearPanel() {
    result.textContent = '';
    valueOperation.textContent = '';
}

function calculate() {
    let numbers = [];
    let operators = [];
    
    const res = result.textContent
    console.log(res)
}

// очистка панели
buttons[0].addEventListener('click', clearPanel)

//удаление последнего значения
buttons[1].addEventListener('click', deleteLastValue)

// отображение значений в панели
buttons.forEach(function(elem) {
    elem.addEventListener('click', writeNum)
})

//произведение операций при нажатии на кнопку =
buttons[buttons.length - 1].addEventListener('click', calculate)

