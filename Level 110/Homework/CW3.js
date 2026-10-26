let bankAccount = {
    owner: "Goga",
    balance: 1500,
    currency: "GEL"
}

bankAccount.showBalance = function(){
    return this.owner, balance
}

bankAccount.showBalance = function(amount){
    return this.balance + amount
}

bankAccount.withdraw = function(amount){
    return this.balance - amount
}

bankAccount.showInfo = function(){
    if(!this.balance){
        return "Not enough money!"
    }else{
        return this.balance
    }
}



