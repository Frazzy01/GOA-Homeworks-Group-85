let storeAccount = {
    _username : "Goga",
    _email : "goga@gmail.com",
    _balance : 1800,
    _password : "goga1234",
    _isActive : true,
    _loginAttempts : 0,
    set username(newUser){
        newUser && newUser.length >= 4 ? this._username = newUser : "Invalid username!"
    },
    get username(){
        return this._username
    },
    set email(newEmail){
        newEmail && newEmail.includes('@') && newEmail.endsWith('.com') ? this._email = newEmail : "Invalid email address!"
    },
    get email(){
        return this._email
    },
    set password(newPass){
        newPass && newPass.length >= 8 ? this.password = newPass : "Weak password!"
    },
    get password(){
        return "Password is protected"
    },
    get accountStatus(){
        return this._isActive ? "Account is active" : "Account is inactive"
    },
    set login(pass){
        if (pass !== this._password) {
            this._loginAttempts++
            console.log("Incorrect password!")
            if (this._loginAttempts >= 3) {
                this._isActive = false
                this._loginAttempts = 0
                console.log("account inactive after 3 failed attempts")
            }
        }
        else {
            this._loginAttempts = 0
            console.log("Login successful!")
        }
    },
    set purchase(price){
        if(this._isActive){
            if(price && price > 0){
                if(price > this._balance){
                    console.log("Insufficient balance!")
                }
                else{
                    this._balance -= price
                    console.log("Purchase successful!")
                    if(this._balance < 100){
                        console.log("Low balance warning!")
                    }
                }
            }
        }
        else{
            console.log("Account is inactive!")
        }
    },
    set addBalance(amount){
        if(this._isActive){
            amount && amount > 0 ? this._balance += amount : "Invalid amount!"
        }
        else{
            console.log("Account is inactive!")
        }
    }
}
console.log(storeAccount.accountStatus)
console.log('before:',storeAccount._balance)
storeAccount.addBalance = 800
console.log('after:', storeAccount._balance)
console.log('before:',storeAccount._balance)
storeAccount.purchase = 2560
console.log('after:', storeAccount._balance)
console.log('before:',storeAccount._loginAttempts)
storeAccount.login = 1320132
storeAccount.login = "goga1234"
console.log('after:', storeAccount._loginAttempts)