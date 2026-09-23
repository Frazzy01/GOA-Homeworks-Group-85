function double(number){
    return number * 2
}

function square(number){
    return number * number
}

function negative(number){
    return -number
}

function processNumber(number, operation) {
    return operation(number)
}

console.log(processNumber(5, double))
console.log(processNumber(5, square))
console.log(processNumber(5, negative))

