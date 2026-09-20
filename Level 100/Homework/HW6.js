const prices = [100, 250, 80, 400, 150]
let procent = [10, 50, 5, 80, 99]

function calculateDiscount(prices, procent){
    let i = 0
    while(i < prices.length){
        let discount = (prices[i] * procent[i]) / 100
        console.log(discount)
        i++
    }
    

}

console.log(calculateDiscount(prices, procent))