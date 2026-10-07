let prices = [120, 450, 80, 300, 50, 700]

const newPrices = prices.map((item) => {
    if(item < 100){
        return item += 20
    }else if(item < 500){
        return item += 50
    }else if (item > 500){
        return item += 100
    }
})

newPrices.forEach(item => {
    console.log(item)
});