let numbers = [12, 5, 18, 7, 24, 9, 30, 11, 6, 21]

function numberjumber(numbers) {
    oddcount = 0
    maxnumba = numbers[0]
    minnumba = numbers[0]

    for (let i = 0; i < numbers.length; i++) {

        let indexs = numbers[i]

        if (indexs % 2 == 0) {
            console.log(indexs)
        } else {
            oddcount += indexs
        }

        if (indexs < minnumba) {
            minnumba = indexs
        }

        if (indexs > maxnumba) {
            maxnumba = indexs
        }

        if (indexs > 10 && indexs < 25) {
            console.log("special number")
        }
    }

        console.log(oddcount, "ODD COUNT")
        console.log(maxnumba, "MAX")
        console.log(minnumba, "MIN")
    

    // for (let i = numbers.length - 1; i >= 0; i--) {
    //     if (numbers[i] % 3 === 0) {
    //         console.log(numbers[i]);
    //     }
    // }

    return numbers
}

console.log(numberjumber(numbers))