let products = {
    laptop: 2500,
    phone: 1800,
    headphones: 250,
    keyboard: 150,
    monitor: 900,
    mouse: 80
}

let values = Object.values(products)
let upper500 = 0
let sum = 0
let max = 0
let expensiveProducts = {

}

for(let i in products){
    console.log(i, "-->", products[i])

    if(products[i] > 500){
        upper500++
    }
    if(products[i] < 500){
        expensiveProducts[i] = products[i]
    }

    sum += products[i]

    if(products[i] > max){
        max = products[i]
        console.log("MAX PRICE BROTHAAAAAA", i, "-->", products[i])
    }
}

console.log(upper500)
console.log(sum)
console.log(expensiveProducts)