function getResult(name, score){
    switch(true){
        case(score >= 90):
            console.log("name: Excellent")
            break
        case(score >= 70):
            console.log("name: Good")
            break
        case(score >= 50):
            console.log("name: Passed")
            break
        case(score <= 49):
            console.log("name: Failed")
            break
        default:
            console.log("0")
            break
    }   
}

getResult("Levan", 1000)
getResult("Levan", 89)
getResult("Levan", 70)
getResult("Levan", 69)
getResult("Levan", 50)
getResult("Levan", 49)
getResult("Levan",)
getResult("Levan",)