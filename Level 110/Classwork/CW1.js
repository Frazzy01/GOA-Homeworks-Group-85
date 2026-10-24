let product = {
    productName : "Notebook",
    price : 3499,
    quantity : 30,
    inStock : true,
    allProdPrice(){
        return product.price * product.quantity
    },
    isStock(){
        return product.inStock === true ? "yes we have this nproduct" : "no we dont have this product"
    }
}

console.log(product.allProdPrice())
console.log(product.isStock())