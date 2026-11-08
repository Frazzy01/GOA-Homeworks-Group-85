let bankAccount = {
    _owner: "Goga",
    _balance: 2500,
    _pin: "1234",
    _isBlocked: false,
    get info() {
        return this._owner
    },

    set newName(i) {
        if (typeof i === "string" && i != "") {
            this._owner = i
        } else {
            console.log("Invalid owner name!")
        }
    },

    get balance() {
        return this._balance
    },

    set balance(i) {
        if (typeof i === "number" && i >= 0) {
            this._balance = i
        } else {
            console.log("Invalid balance!")
        }
    },

    get password() {
        return("PIN is hidden")
    },

    set password(i) {
        if (i.length === 4) {
            this._pin = i
        } else {
            console.log("PIN must contain exactly 4 digits!")
        }
    },

    get accountinfo() {
        if (this._isBlocked === false) {
            return "Blocked"
        } else {
            return "Active"
        }
    },

    set deposit(i) {
        if (i > 0 && this._isBlocked === false) {
            this._balance += i
        } else if (i > 0 && this._isBlocked === true) {
            console.log("Account is blocked!")
        } else if (i <= 0 && this._isBlocked === false) {
            console.log("Invalid deposit amount!")
        }
    },

    set withdraw(i) {
        if (i > 0 && this._balance >= i) {
            this._balance -= i
        } else if (i > 0 && this._isBlocked === true) {
            console.log("Account is blocked!")
        } else if (i <= 0 && this._balance < i) {
            console.log("Insufficient balance!")
        }
    }
}


bankAccount.newName = "Levan"
bankAccount.balance = 1000000
bankAccount.password = "6969"
bankAccount.deposit = 1000000
bankAccount.withdraw = 500000

console.log(bankAccount.info)
console.log(bankAccount.balance)
console.log(bankAccount.password)
console.log(bankAccount.accountinfo)

