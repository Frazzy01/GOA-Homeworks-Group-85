let price = 200

function discount(price){
    return price - 20
}

function tax(price){
    return price + 18
}

function shipping(price){
    return price + 30
}

function processPrice(price, operation) {
    console.log(operation(price))
}

processPrice(price, discount)
processPrice(price, tax)
processPrice(price, shipping)