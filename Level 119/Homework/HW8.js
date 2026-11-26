let product = {
    name: "Laptop",
    price: 2500,
    brand: "Lenovo",
    inStock: true
};

let updatedInfo = {
    price: 2200,
    inStock: false,
    discount: 300
}

let updatedProduct = {
    ...product,
    ...updatedInfo,
}


console.log(updatedProduct)