let string = "HelloWorld"

function countVowels(string) {
    let countVowels = 0
    let vowels = ["a", "e", "i", "o", "u"]
    let i = 0

    while (i < string.length) {
        if (vowels.includes(string[i].toLowerCase())) {
            countVowels++
        }
        i++
    }

    console.log(countVowels)
}

countVowels(string)