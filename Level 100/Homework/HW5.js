let numberjumber = [52, 142, 99, 69, 24, 36]

function analyzeNumbers(numberjumber) {
    let i = 0
    let count = 0
    let oddcount = 0
    let evencount = 0
    while (i < numberjumber.length) {
        count = count + numberjumber[i]

        if (numberjumber[i] % 2 == 0) {
            evencount += 1
        }else{
            oddcount += 1
        }

        i++

    }

    console.log(count)
    console.log(`${evencount} even`)
    console.log(`${oddcount} odd`)
}

console.log(analyzeNumbers(numberjumber))