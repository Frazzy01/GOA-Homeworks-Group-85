let numberjumber = [10, 20, 30, 40, 50, 60, 70, 80]

function organizeNumbers(numbers) {
    let firstnum = numbers.slice(0, 4)
    let secondnum = numbers.slice(4)
    secondnum.unshift(100)
    firstnum.push(5)
    let finalArray = firstnum.concat(secondnum)

    return finalArray
}

console.log(organizeNumbers(numberjumber))