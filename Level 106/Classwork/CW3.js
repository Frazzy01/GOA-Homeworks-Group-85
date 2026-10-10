let numbers = [25,111,921,321,432,545,133,987,436]
let newNumber = numbers.map((element) => {
    if(element % 2 == 0){
        return element *= 13
    }else if(element % 2 != 0){
        return element *= 16
    }
})

let onlyEven = newNumber.filter(num => num % 2 == 0)

console.log(onlyEven)