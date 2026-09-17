let products = ["Laptop", "Phone", "Mouse", "Keyboard", "Monitor", "Headphones"]

let prices = [2500, 1800, 80, 150, 900, 300]

let quantities = [3, 5, 20, 12, 4, 8]

function shop(products, prices, quantities) {
    let totalbutnototal = 0
    let count = 0

    for (let i = 0; i < products.length; i++) {
        let total = prices[i] * quantities[i]
        console.log(products[i], total)

        if (total > 5000) {
            console.log("High sales")
        } else if (total >= 1000 && total < 5000) {
            console.log("Medium sales")
        } else {
            console.log("Low sales")
        }

        totalbutnototal += total

        if (quantities[i] > 10) {
            count ++
        }
    }

    console.log(totalbutnototal)
    console.log(count)


    return (products, prices, quantities)

}



console.log(shop(products, prices, quantities))

for (let i = products.length - 1; i >= 0; i--) {
    let total = prices[i] * quantities[i]
    console.log(`${products[i]} - ${total}$`)
}