let products = [
    { name: "Laptop", price: 2500, stock: 5, category: "Electronics" },
    { name: "Phone", price: 1800, stock: 0, category: "Electronics" },
    { name: "Book", price: 40, stock: 12, category: "Education" },
    { name: "Headphones", price: 250, stock: 8, category: "Electronics" },
    { name: "Notebook", price: 15, stock: 0, category: "Education" },
    { name: "Monitor", price: 900, stock: 3, category: "Electronics" }
]

let filter = products.filter(item => item.stock >= 1)
let map = products.map(item => item.price += 100)
let index = products.findIndex(item => item.name = "Headphones")
let some = products.some(item => item.price > 2000)
let every = products.every(item => item.stock >= 1)

products.forEach(i => {
    console.log(`${i.name} --> ${i.price}`)
})