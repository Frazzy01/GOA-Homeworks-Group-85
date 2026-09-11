let numberjumber = [15, 25, 35, 45, 55, 65]

function finalList(numbers) {
    if (Array.isArray(numbers) == false) {
        return "Not an array"
    } else {
        numbers.shift()
        numbers.unshift(100)
        numbers.pop()
        numbers.push(200)
        numbers.splice(3, 0, 300)

        let finalCopy = numbers.slice()
        return finalCopy
    }
}

console.log(finalList(numberjumber))