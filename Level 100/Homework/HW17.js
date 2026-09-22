let numbers = [34, 12, 89, 45, 67, 23, 90, 11, 56, 78, 43, 29]

function numberjumber(numbers){
    let i = 0
    let max = numbers[0]
    let min = numbers[0]
    let count = 0
    let oddcount = 0
    let evencount = 0
    let plus50count = 0
    let minus50count = 0
    let maxeven = numbers[0]
    let maxodd = numbers[0]
    let minodd = numbers[0]
    let mineven = numbers[0]

    while(i < numbers.length){

        if(numbers[i] > max){
            max = numbers[i]
        }

        if(numbers[i] < min){
            min = numbers[i]
        }

        if(numbers[i] % 2 == 0){
            evencount++
        }else{
            oddcount++
        }

        if(numbers[i] > 50){
            plus50count++
        }

        if(numbers[i] < 50){
            minus50count = 0
        }

        if(numbers[i] % 2 == 0 && numbers[i] > maxeven){
            maxeven = numbers[i]
        }

        if(numbers[i] % 2 !== 0 && numbers[i] > maxodd){
            maxodd = numbers[i]
        }

        if(numbers[i] % 2 !== 0 && numbers[i] < minodd){
            minodd = numbers[i]
        }

        if(numbers[i] % 2 == 0 && numbers[i] < mineven){
            mineven = numbers[i]
        }

        count += numbers[i]

        i++
    }

    console.log(`min: ${min}`)
    console.log(`max: ${max}`)
    console.log(`total: ${count}`)
    console.log(console.log(`Even count: ${evencount}`))
    console.log(console.log(`Odd count: ${oddcount}`))
    console.log(console.log(`50 meti: ${plus50count}`))
    console.log(console.log(`50 naklebi: ${plus50count}`))
    console.log(console.log(`max even: ${maxeven}`))
    console.log(console.log(`max odd: ${maxodd}`))
    console.log(console.log(`min odd: ${minodd}`))
    console.log(console.log(`min even: ${mineven}`))
}

numberjumber(numbers)