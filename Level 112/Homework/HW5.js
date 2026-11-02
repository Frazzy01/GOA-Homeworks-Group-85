let products = [
    { name: "Laptop", price: 2500, stock: 8, rating: 4.8 },
    { name: "Mouse", price: 80, stock: 25, rating: 4.2 },
    { name: "Keyboard", price: 180, stock: 12, rating: 4.7 },
    { name: "Monitor", price: 900, stock: 0, rating: 4.9 },
    { name: "Headphones", price: 350, stock: 15, rating: 4.6 },
    { name: "Tablet", price: 1200, stock: 5, rating: 3.9 },
    { name: "Webcam", price: 220, stock: 10, rating: 4.5 }
]


let filter = products.filter(item => item.price > 200 && item.stock >= 5 && item.rating >= 4.5)
let filtercount = 0

products.forEach(i => {
    console.log(i.name, i.price, i.rating)  
    console.log(i.name, "costs", i.price, "GEL", "Rating:", i.rating)
})

filtercount = filter.length
console.log(filtercount)