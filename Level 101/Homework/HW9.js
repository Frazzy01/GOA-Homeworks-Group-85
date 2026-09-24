function transform(number, operation) {
    console.log(operation(number))
}

function double(number){
    return number * 2
}

function square(number){
    return number * number
}

function addTen(number){
    return number + 10
}

function half(number){
    return number / 2
}

transform(20, double)
transform(20, square)
transform(20, addTen)
transform(20, half)