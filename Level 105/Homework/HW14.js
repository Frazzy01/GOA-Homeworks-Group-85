let numbers = [10, 25, 4, 18, 33, 7, 40]

const numberJumber = numbers.map((item) => {
    if(item > 20){
        return item -= 5
    }else if(item < 20){
        return item += 5
    }else if(item === 20){
        return item *= 2
    }
})

numberJumber.forEach(item => {
    console.log(`number: ${item}`)
});
