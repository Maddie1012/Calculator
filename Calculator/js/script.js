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
    const res = result.textContent
    const regex = /(\d+\.?\d*)([\+\-\*\/])(\d+\.?\d*)/;
    const filterArr = res.match(regex)

    let firstNum = parseFloat(filterArr[1])
    let secondNum = parseFloat(filterArr[3])
    let operator = filterArr[2]
    let calcilation;

    switch(operator) {
        case '+':
            calcilation = firstNum + secondNum;
        break;
        case '-':
            calcilation = firstNum - secondNum;
        break;
        case '*':
            calcilation = firstNum * secondNum;
        break;
        case '/':
            if(secondNum === 0) {
                result.textContent === 'Error';
                return;
            }
            calcilation = firstNum / secondNum;
        break;
        default:
            result.textContent === 'Error';
            return;
    }
    valueOperation.textContent = result.textContent
    result.textContent = calcilation.toString()
}

function calcPercent() {
    const res = result.textContent;
    const regex = /(\d+(\.\d+)?)/g;
    const numbers = res.match(regex);

    if (numbers && numbers.length > 0) {
        let num = parseFloat(numbers[numbers.length - 1]);
        const percent = num / 100;
        result.textContent = percent.toString();
    } else {
        result.textContent = 'Error';
    }
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

buttons[2].addEventListener('click', calcPercent)

