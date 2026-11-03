let products = [
    { name: "Laptop", price: 2500, rating: 4.8 },
    { name: "Mouse", price: 80, rating: 3.5 },
    { name: "Keyboard", price: 180, rating: 4.6 },
    { name: "Monitor", price: 900, rating: 4.2 },
    { name: "Headphones", price: 350, rating: 4.9 },
    { name: "Tablet", price: 1200, rating: 3.8 }
]

let filter = products.filter(item => item.price > 100)

filter.forEach(i => {
    console.log(i.name, "-->", i.price)  

    i.rating >= 4.5 ? console.log(i.name, "Excellent") : console.log("Good")

    console.log(i.name, "-->", i.price, i.rating)
})