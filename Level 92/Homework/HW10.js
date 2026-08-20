let a1 = 20
let b1 = 5
let operator = ''

switch(operator) {
    case '+':
        console.log(a1 + b1)
        break
    case '-':
        console.log(a1-b1)
        break
    case '':
        console.log(a1 * b1)
        break
    case '/':
        console.log(a1 / b1)
        break
    case '%':
        console.log(a1 % b1)
        break
    default:
        console.log('Invalid operator')
        break
}