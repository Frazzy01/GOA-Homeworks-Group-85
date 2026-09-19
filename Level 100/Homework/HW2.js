const numbers = [-5, 10, -2, 8, 0, 15, -7]
let negativecount = 0
let positivecount = 0
let zerocount = 0
let i = 0
while (i < numbers.length) {
    if (numbers[i] < 0) {
        console.log(numbers[i], "negative")
        negativecount += 1
    } else if (numbers[i] > 0) {
        console.log(numbers[i], "positive")
        positivecount += 1
    } else {
        console.log("zero")
        zerocount += 1
    }
    i++
}

    console.log(`${negativecount} - negative count`)
    console.log(`${positivecount} - positive count`)
    console.log(`${zerocount} - zero count`)
