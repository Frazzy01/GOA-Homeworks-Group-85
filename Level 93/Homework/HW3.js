function calculateShipping(price, shipping = 10) {
    if (price >= 100) {
        console.log("Delivery is free.")
    }else{
        shipping = price + shipping
        console.log(shipping)
    }
}

calculateShipping(100, shipping = 10)
calculateShipping(70, 52)
calculateShipping(10, 47)
calculateShipping(20, shipping = 10)
