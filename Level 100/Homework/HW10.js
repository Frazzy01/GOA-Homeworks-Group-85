let sum = "i always comeback"

function calculateSum(number){
    let sum = 0

    let i = 0
    while(i <= number){
        sum = sum + i

        i++
    }

    return sum
}

let total = calculateSum(67) 
console.log(total)
console.log(sum)