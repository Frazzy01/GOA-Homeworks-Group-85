let numbers = [12, 5, 20, 7, 30, 11, 8]

const numberJumber = numbers.map((item) => {
    if(item % 2 == 0){
        return item *= 2
        console.log(item)
    }else if(item % 2 != 0){
        return item *= 3
    }
})

numberJumber.forEach(item => {
    console.log(item)
});