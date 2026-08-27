function calculateShipping(price, shipping = 10) {
    if (price >= 100) {
        console.log("Delivery is free.")
    }else{
        price = price + shipping
        console.log(price)
    }
}

calculateShipping(100,)
calculateShipping(70, 52)
calculateShipping(10, 47)
calculateShipping(20,)
