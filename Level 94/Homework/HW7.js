function items(price, discount){
    if(discount >= 50){
        console.log("Discount too high")
    }else if(discount < 0){
        console.log("Invalid discount")
    }else{
        console.log(price * discount)
    }
}

items(30, 10)
items(50, 30)
items(52, 500)
items(52, -1000000000000000000000000)

