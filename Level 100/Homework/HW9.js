const numbers = [4, 8, 12, 25, 30, 40, 50]

function numberjumber(numbers){
    let i = 0
    while(i < numbers.length){
        if(numbers[i] > 20){
            console.log(numbers[i])
            break
        }

        i++
    }
}

numberjumber(numbers)