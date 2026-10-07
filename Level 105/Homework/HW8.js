let prices = [100, 200, 350, 80, 500]

const newPrices = prices.map((item) => {
    return item += 50
})

newPrices.forEach(item => {
    console.log(`New Price ${item}`)
});