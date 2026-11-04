let products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 2500, rating: 4.8, inStock: true },
    { id: 2, name: "Phone", category: "Electronics", price: 1800, rating: 4.5, inStock: false },
    { id: 3, name: "Headphones", category: "Accessories", price: 300, rating: 4.2, inStock: true },
    { id: 4, name: "Keyboard", category: "Accessories", price: 450, rating: 3.9, inStock: true },
    { id: 5, name: "Monitor", category: "Electronics", price: 1200, rating: 4.9, inStock: false },
    { id: 6, name: "Mouse", category: "Accessories", price: 150, rating: 4.6, inStock: true },
    { id: 7, name: "Tablet", category: "Electronics", price: 900, rating: 3.7, inStock: true }
]

let onlyElectronics = products.filter(item => item.category === "Electronics")
let goodandexpensive = products.filter(item => item.price > 500 && item.rating >= 4.5)
let instockfalse = products.filter(item => item.inStock === false)
let instocktrue = products.filter(item => item.inStock === true)
let inStockTrueee = "nothing"

let map = products.map(item => item.name, "-", item.price)
let mapagain = products.map(item => item.price += 100)

let index = products.findIndex(item => item.name === "Monitor")
let indexagain = products.findIndex(item => item.rating < 4)

let some = products.some(item => item.price > 2000)
let someagain = products.some(item => item.inStock === false)

let every = products.every(item => item.price > 100)
let everyagain = products.every(item => item.price >= 3.5)


products.forEach(i => {

    inStockTrueee = i.inStock === true ? console.log(`${i.name} in stock`) : null
    console.log(`${i.name} costs ${i.price} GEL`, inStockTrueee)
    console.log(map)
    console.log(mapagain)
    console.log(index)
    console.log(indexagain)
    console.log(some)
    console.log(someagain)
    console.log(every)
    console.log(everyagain)
})