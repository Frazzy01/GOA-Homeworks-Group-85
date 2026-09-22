let balance = 1200
let operations = [200, -150, -500, 300, -200, -1000, 400]

let goodoperations = 0
let badoperations = 0
let i = 0
while (i < operations.length) {

    i++

    if (operations[i] < 0 && balance < -operations[i]) {
        badoperations++
        continue
    }

    if (operations[i] > 0) {
        balance += operations[i]
    } else if (operations[i] < 0) {
        balance += operations[i]
        goodoperations++
        continue
    }

}

console.log(goodoperations)
console.log(badoperations)
console.log(balance)