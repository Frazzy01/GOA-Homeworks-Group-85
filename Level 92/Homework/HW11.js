let action = 'withdraw'
let balance = 500
let amount = 200

switch (action) {
    case 'balance':
        console.log(balance)
        break
    case 'deposit':
        console.log(balance + amount)
        break
    case 'withdraw':
        balance - amount >= 0 ? console.log(balance - amount) :
            console.log('Insufficient balance')
        break
    case 'exit':
        console.log('Goodbye!')
        break
    default:
        console.log('invalid action')
}