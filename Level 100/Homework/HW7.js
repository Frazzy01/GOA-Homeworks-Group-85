let number = prompt("Enter your number: ")

function findDivisors(number){
    let divisors = []
    let i = 1

    while(i <= number){
        if(number % i === 0){
            divisors.push(i)
        }
        i++
    }
    console.log(divisors)
}

findDivisors(number)