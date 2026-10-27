let product = {
    name: "Laptop",
    price: 2500,
    quantity: 10,
    showInfo(){
        return product.name, product.price, product.quantity
    },
    calculateTotal(){
        return product.price * product.quantity
    },
    sell(amount){
        if(amount < product.quantity){
            product.quantity - amount
        }
    },
    restock(amount){
        product.quantity + amount
    },
    changePrice(newPrice){
        product.price = newPrice
    }
}
