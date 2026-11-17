let product = {
    title: "Gaming Laptop",
    price: 2500,
    category: "Electronics",
    stock: 12,
    available: true
}

let {title : t, price : pr, category : c, stock : st, available : tr} = product


let {title : productName} = product

console.log(productName)

let {stock : quantity} = product

console.log(quantity)

console.log(t, pr)

if(tr === true){
    console.log("Product is available")
}else{
    console.log("Out of stock")
}