let numbers = [5, 12, 25, 8, 40, 17]

const numberJumber = numbers.map((item) => {
    if(item < 10){
        return "Small"
    }else if(item < 20){
        return "Medium"
    }else if(item > 20){
        return "Large"
    }
})

numberJumber.forEach(item => {
    console.log(item)
});