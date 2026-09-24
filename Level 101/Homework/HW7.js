function passed(score){
    return "Student passed"
}

function failed(score){
    return "Student failed"
}

function showResult(score, resultFunction){
    console.log(resultFunction(score))
}

console.log(showResult(90, failed))
console.log(showResult(40, failed))
