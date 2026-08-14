let password = "JavaScript"

if(password === "" || password === 0 || password === NaN || password === null || password === undefined){
    console.log("Password is empty")
}else if(password.length <= 6){
    console.log("Too short")
}else if(password.length <= 10){
    console.log("Medium password")
}else{
    console.log("Strong password")
}