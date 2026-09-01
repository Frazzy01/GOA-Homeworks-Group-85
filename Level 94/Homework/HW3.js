let getGrade = function(score){

    switch(true){
        case (score >= 90):
            console.log("A")
            break
        case (score === 100 && score >= 100):
            console.log("A")
            break
        case (score >= 80):
            console.log("B")
            break
        case (score >= 70):
            console.log("C")
            break
        case (score >= 60):
            console.log("D")
            break
        case (score <= 0):
            console.log("F")
            break
        

    }
}


getGrade(120) 
