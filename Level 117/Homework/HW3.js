let product = {
    title: "Gaming Laptop",
    price: 2500,
    specifications: ["16GB RAM", "512GB SSD", "RTX 4060"],
    colors: ["Black", "White", "Gray"]
}

let {title, price, specifications, colors} = product
let [one, two, three] = specifications
let [first, , second] = colors 
console.log(title, price, specifications, colors)
if(price > 2000){
    console.log("Expensive Product")
}else{
    console.log("Affordable Product")
}