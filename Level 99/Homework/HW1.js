let prices = [120, 45, 300, 80, 150, 25, 400]
let totalomafriendo = []

for (let i = 0; i < prices.length; i++) {
    if (prices[i] > 100) {
        prices[i] = prices[i] - 20
    } else if (prices[i] <= 100 && prices[i] >= 50) {
        prices[i] = prices[i] - 10
    }

    totalomafriendo.push(prices[i])


}

console.log(totalomafriendo)

// for (let i = prices.length - 1; i >= 0; i--) {
//     console.log(prices[i]);
// }