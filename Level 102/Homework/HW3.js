function calculate(a, b, operation){
    return operation(a, b)
}

function add(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return a / b
}

console.log(calculate(10, 5, add))
console.log(calculate(10, 5, subtract))
console.log(calculate(10, 5, multiply))
console.log(calculate(10, 5, divide))