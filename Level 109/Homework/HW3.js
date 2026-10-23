let product = {
    title: "Gaming Laptop",
    price: 2500,
    brand: "ASUS",
    stock: 12,
    color: "Black",
    category: "Electronics",
    discount: false
};

console.log(product.title)
console.log(product.price)
console.log(product.stock)

product.price = 2800
product.stock = 8
product.rating = 4.8
product.warranty = "2 years"
delete product.color
product.discount = true
delete product.category
product.isAvailable = true

console.log(product.price)
console.log(product.brand)
console.log(product.rating)
console.log(product.isAvailable)
