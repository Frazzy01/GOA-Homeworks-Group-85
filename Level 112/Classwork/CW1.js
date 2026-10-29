let products = [
    { name: "Laptop", price: 2500, category: "Electronics", inStock: true },
    { name: "Phone", price: 1800, category: "Electronics", inStock: false },
    { name: "Book", price: 40, category: "Education", inStock: true },
    { name: "Headphones", price: 150, category: "Electronics", inStock: true },
    { name: "Notebook", price: 15, category: "Education", inStock: false }
]

let sum = 0

products.forEach(element => {
    console.log(element.name, "-", element.price)
    console.log(element.inStock === true ? element.name + " in Stock" : element.name + " not in stock")
    
    if(element.price > 1000){
        console.log(element.name, " -- ", element.price)
    }else{
        console.log("1000 down")
    }

    if(element.category === "Education" ){
        console.log(element)
    }else{
        console.log("no educations")
    }

    sum += element.price
})

console.log(sum)