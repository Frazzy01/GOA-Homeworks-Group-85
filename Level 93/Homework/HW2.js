function getResult(name, score = 0) {
    if(score >= 90){
        console.log("name: Excellent")
    }else if(score >= 70){
        console.log("name: Good")
    }else if(score >= 50){
        console.log("name: Passed")
    }else if(score >= 1){
        console.log("name: Failed")
    }else{
        console.log(score)
    }
}

getResult("Levan", 1000)
getResult("Levan", 89)
getResult("Levan", 70)
getResult("Levan", 69)
getResult("Levan", 50)
getResult("Levan", 34)
getResult("Levan", )
getResult("Levan",)