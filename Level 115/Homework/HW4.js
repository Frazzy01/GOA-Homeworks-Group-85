function createCart(){
    return {
        items : [],
        addProduct(name, price, quantity){
            let same = false
            for(let i of this.items){
                if(i.name == name){
                    i.quantity += quantity
                    same = true
                    break
                }
            }
            if(!same){
                this.items.push({name,price,quantity})
            }
        },
        removeProduct(name){
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].name == name) {
                    this.items.splice(i, 1)
                    break
                }
            }
        },
        increaseQuantity(name,amount){
            for(let i of this.items){
                if(i.name == name){
                    i.quantity += amount
                    break
                }
            }
        },
        getTotal(){
            let total = 0
            for(let i of this.items){
                total += i.price * i.quantity
            }
            return total
        },
        getCartInfo(){
            return this.items
        }
    }
}

let cart = createCart()
cart.addProduct('apple',2,5)
cart.addProduct('pear',5,1)
cart.addProduct('banana',6,4)
cart.addProduct('melon',7,2)
cart.removeProduct('pear')
cart.increaseQuantity('melon',1)
console.log('total price:',cart.getTotal())
console.log('cart',cart.getCartInfo())