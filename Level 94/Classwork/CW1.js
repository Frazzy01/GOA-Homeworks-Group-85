let checkNumber = function(number = 0){
    number > 0 && number % 2 == 0 ? console.log("Positive Even"): number > 0 && number % 2 != 0 
    ? console.log("Positive Odd") : number < 0 && number % 2 == 0 ? console.log("Negative Even") 
    : number < 0 && number % 2 != 0 ? console.log("Negative Odd") : console.log("zero")
}

checkNumber(0)
checkNumber(20)
checkNumber(67)
checkNumber(-14)
checkNumber(-69)