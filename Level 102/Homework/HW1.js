
function double(number) {
    return number * 2
}

function triple(number) {
    return number * 3
}

function square(number) {
    return number * number
}


function processNumber(number, operation) {
    return operation(number)
}

console.log(processNumber(5, double))
console.log(processNumber(5, triple))
console.log(processNumber(5, square))