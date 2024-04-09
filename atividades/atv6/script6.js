prepareElements();
const input = document.getElementById('calculatorNumber');

const calculScreen = document.getElementById('calculatorCalculScreen');
let previousNumber = 0;
let isWaiting = false;
let operatorType = '';
let onResult = false;

let firstNumberEntered = false;
function clearAll(){
    input.value = 0;
    calculScreen.innerHTML = '&emsp;';
}

function addNumber(number){
    if(number === '.' && input.value.includes('.')) return;

    if((isWaiting && firstNumberEntered) || onResult || (input.value.startsWith('0') && number !== '.' && !input.value.includes('.'))){
        input.value = number;
        onResult = false;
        firstNumberEntered = false;
    }else input.value += number;
}

function operation(operator, e){
    operatorType = operator;
    previousNumber = Number(input.value);
    calculScreen.innerText = `${previousNumber}${e.innerText}`;
    isWaiting = true;
    firstNumberEntered = true;
}

function opInverse(){
    input.value = input.value.length !== 0 ? -input.value : 0;
}

function delLastNumber(){
    input.value = input.value.length === 1 ? 0 : input.value.substring(0, input.value.length - 1);
}

function operationInstant(operator){
    const currentNumber = Number(input.value);
    switch(operator){
        case '%':
            input.value = currentNumber / 100;
            break;
        case '1/x':
            input.value = 1 / currentNumber;
            break;
        case 'x2':
            input.value = currentNumber**2;
            break;
        case '2/x':
            input.value = Math.sqrt(currentNumber);
            break;
        default:
            alert('AN ERROR OCCUR!');
            break;
    }
}

function opEqual(){
    if(!isWaiting) return;

    onResult = true;

    const lastNumber = Number(input.value);
    let answer = 0;

    calculScreen.innerHTML += `${lastNumber}&equals;`;

    switch(operatorType){
        case '%':
            break;
        case '/':
            answer = previousNumber / lastNumber;
            break;
        case 'x':
            answer = previousNumber * lastNumber;
            break;
        case '-':
            answer = previousNumber - lastNumber;
            break;
        case '+':
            answer = previousNumber + lastNumber;
            break;
        default:
            alert('Ocorreru algum erro!');
            break;
    }

    input.value = answer;
    isWaiting = false;
}

function prepareElements() {
    let mainElement = document.createElement('main');
    mainElement.setAttribute('class', '');

    let calculatorContainer = document.createElement('div');
    calculatorContainer.setAttribute('id', 'calculator');

    let calculatorScreen = document.createElement('p');
    calculatorScreen.setAttribute('id', 'calculatorCalculScreen');
    calculatorScreen.textContent = '\u2003';

    let inputLabel = document.createElement('label');
    let inputNumber = document.createElement('input');
    inputNumber.setAttribute('type', 'number');
    inputNumber.setAttribute('value', '0');
    inputNumber.setAttribute('id', 'calculatorNumber');
    inputNumber.setAttribute('oninput', "this.value = this.value.replace(/[^0-9]/g, '').replace(/(\\..*)\\./g, '$1');");
    inputLabel.appendChild(inputNumber);

    let buttonsContainer = document.createElement('div');
    buttonsContainer.setAttribute('id', 'calculatorButtons');

    let buttonConfigs = [
        { type: 'button', className: 'calculator-button', onclick: "operationInstant('%');", text: '%' },
        { type: 'button', className: 'calculator-button span-2', onclick: "clearAll();", text: 'CE' },
        { type: 'button', className: 'calculator-button span-2', onclick: "clearAll();", text: 'C' },
        { type: 'button', className: 'calculator-button', onclick: "delLastNumber();", text: '\u2190' },
        { type: 'button', className: 'calculator-button', onclick: "operationInstant('1/x');", text: '1/\u00D7' },
        { type: 'button', className: 'calculator-button', onclick: "operationInstant('x2');", text: '\u00D7\u00B2' },
        { type: 'button', className: 'calculator-button', onclick: "operationInstant('2/x');", text: '\u221Ax' },
        { type: 'button', className: 'calculator-button', onclick: "operation('/', this);", text: '\u00F7' },
        { type: 'button', className: 'calculator-button calculator-number', onclick: "addNumber(7);", text: '7' },
        { type: 'button', className: 'calculator-button calculator-number', onclick: "addNumber(8);", text: '8' },
        { type: 'button', className: 'calculator-button calculator-number', onclick: "addNumber(9);", text: '9' },
        { type: 'button', className: 'calculator-button', onclick: "operation('x', this);", text: '\u00D7' },
        { type: 'button', className: 'calculator-button calculator-number', onclick: "addNumber(4);", text: '4' },
        { type: 'button', className: 'calculator-button calculator-number', onclick: "addNumber(5);", text: '5' },
        { type: 'button', className: 'calculator-button calculator-number', onclick: "addNumber(6);", text: '6' },
        { type: 'button', className: 'calculator-button', onclick: "operation('-', this);", text: '\u2212' },
        { type: 'button', className: 'calculator-button calculator-number', onclick: "addNumber(1);", text: '1' },
        { type: 'button', className: 'calculator-button calculator-number', onclick: "addNumber(2);", text: '2' },
        { type: 'button', className: 'calculator-button calculator-number', onclick: "addNumber(3);", text: '3' },
        { type: 'button', className: 'calculator-button', onclick: "operation('+', this);", text: '\u002B' },
        { type: 'button', className: 'calculator-button calculator-number', onclick: "opInverse();", text: '\u00B1' },
        { type: 'button', className: 'calculator-button calculator-number', onclick: "addNumber(0);", text: '0' },
        { type: 'button', className: 'calculator-button calculator-number', onclick: "addNumber('.');", text: ',' },
        { type: 'button', className: 'calculator-button calculator-equal', onclick: "opEqual();", text: '=' }
    ];

    buttonConfigs.forEach(function(config) {
        let button = document.createElement(config.type);
        button.setAttribute('type', 'button');
        button.setAttribute('class', config.className);
        button.setAttribute('onclick', config.onclick);
        button.textContent = config.text;
        buttonsContainer.appendChild(button);
    });

    calculatorContainer.appendChild(calculatorScreen);
    calculatorContainer.appendChild(inputLabel);
    calculatorContainer.appendChild(buttonsContainer);
    mainElement.appendChild(calculatorContainer);

    document.body.appendChild(mainElement);
}
