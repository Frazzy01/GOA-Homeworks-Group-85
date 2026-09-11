let jumberiko = ["Laptop", "Mouse", "Keyboard", "Monitor"]


function editProducts(products){
    products.unshift("Phone")
    products.push("Headphones")
    products.pop()
    products.splice(2, 0, "Webcam")
    return products
}


console.log(editProducts(jumberiko))