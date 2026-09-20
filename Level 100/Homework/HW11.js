const text = "JavaScript is fun and JavaScript is powerful"

function analyzeText(text) {
    let i = 0
    let countA = 0
    let space = 0
    let countVowels = 0
    let vowels = ["a", "e", "i", "o", "u"]
    while (i < text.length) {
        console.log(text[i])

        if (text[i] === "a") {
            countA++
        }

        if (vowels.includes(text[i].toLowerCase())) {
            countVowels++
        }

        if (text[i] === " ") {
            space++
            break
        }

        i++
    }

    console.log(countA)
    console.log(countVowels)
}


// function analyzeText(text) {
//     let i = 0
//     let countA = 0
//     let space = 0
//     let countVowels = 0
//     let vowels = ["a", "e", "i", "o", "u"]
//     do {

//         if (text.length === 0) break

//         console.log(text[i])

//         if (text[i] === "a") {
//             countA++
//         }

//         if (vowels.includes(text[i].toLowerCase())) {
//             countVowels++
//         }

//         if (text[i] === " ") {
//             space++
//             break
//         }

//         i++

//     } while (i < text.length)

//     console.log(countA)
//     console.log(countVowels)
//     console.log(text[i])
// }

analyzeText(text)
