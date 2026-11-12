

function createBankAccount(owner, balance, pin,){
    return{
        owner,
        balance,
        pin,


        name(){
            console.log(owner)
        },

        deposit(amount){
            if(amount > 0){
                balance += amount
            }else{
                console.log("brotha are u dumb or what?")
            }
        },
        
        withdraw(amount, enteredPin){
            if(enteredPin === pin && amount <= balance){
                balance -= amount
            }else if(enteredPin !== pin){
                console.log("You’re a different user, right? What are you trying to achieve))")
            }
        },

        getBalance(){
            console.log(balance)
        },

        changePin(oldPin, newPin){
            if(oldPin === pin, newPin.length === 4 ){
                pin = newPin
            }else(
                console.log("old pin incorrect")
            )
        }
    }
}


let player2 = createBankAccount("Nugzari", 1500, "Nugzariko1999")
let player3 = createBankAccount("Tato", 15, "numberjumber123")

player2.name()
player3.name()
player2.deposit(999)
player3.deposit(600)
player2.withdraw(30000, "qwerty12345")
player3.withdraw(2, "numberjumber123")
player2.getBalance()
player3.getBalance()
player2.changePin("Nugzariko1999", "Nugzarchik1999")
player3.changePin("idontknow", "youdontknow")

