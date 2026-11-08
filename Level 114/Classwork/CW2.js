let site = {
    name: "Levan beridze",
    _mail: "PRODEVELOPMENT228@gmail.com",
    _password: "LOLKEKCHEBUREK1234567890",

    get Mail() {
        return this._mail
    },

    set Mail(newMail) {
        this._mail = newMail
    },

    get changepassword(){
        return this._password
    },

    set changepassword(newPass){
        this._password = newPass
    }
}


site.Mail = "WEBDEVELOPMENTTOP999@gmail.com"
site.changepassword = "NUMBERJUMBER12345678901234567890"

console.log(site.Mail)
console.log(site.changepassword)