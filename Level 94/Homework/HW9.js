let validateUser = (username, age, password) => {
    if(username && age >= 18 && password.length >= 8){
        console.log("User is valid")
    }else{
        console.log("User is invalid")
    }
}


validateUser("levan", 20, "wertyu")
validateUser("GOGA", 20, "qwertyuiop")
validateUser("", 1, "")