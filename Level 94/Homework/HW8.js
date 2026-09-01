let validatePassword = password => {
    if(password.length >= 8 && password.includes("@") && password.startsWith(password[0].toUpperCase())){
        console.log("Strong password")
    }else{
        console.log("Weak password")
    }
}

validatePassword("Simple@@@@@@@@")
validatePassword("simple@@@@@@@@")
validatePassword("simpleeeeeeeeee")
validatePassword("lol")