let numbers = [10, 20, 30, 40, 50]
let copiedNumbers = [...numbers]

copiedNumbers[0] = 100
copiedNumbers[4] = 500
numbers.unshift(60)


console.log(numbers)
console.log(copiedNumbers)