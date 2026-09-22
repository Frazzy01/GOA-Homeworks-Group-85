let numbers = [15, 8, 23, 42, 11, 67, 30, 19, 54, 72, 5]
let count = 0
let i = 0
while (i < numbers.length) {

    if (numbers[i] % 2 !== 0) {
        i++
        continue
    }

    if (numbers[i] > 50) {
        console.log(numbers[i])
        break
    }

    console.log(numbers[i])
    count += numbers[i]

    i++
}

console.log(count)