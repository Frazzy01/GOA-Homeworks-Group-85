function analyzeNumber(number, limit = 100){
    number < 0 ? console.log("Negative") : number == 0 ? console.log("Zero") : number > 0 && number < limit ? console.log("Small positive") : number > limit ? console.log("Large positive"): console.log("ERROR")
}

analyzeNumber(-99,)
analyzeNumber(64,)
analyzeNumber(175,)
analyzeNumber(0,)