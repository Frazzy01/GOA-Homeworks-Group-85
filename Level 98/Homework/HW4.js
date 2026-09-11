let cartjumber = ["Bread", "Milk", "Cheese", "Apple", "Juice"]

function shoppingCart(cart){
    cart.unshift("Water")
    cart.push("Chocolate")
    cart.shift()
    cart.splice(3, 0, "Yogurt")

    let cartNotJumber = cart.slice(0, 4)
    return cartNotJumber
}

console.log(shoppingCart(cartjumber))