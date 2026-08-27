function checkExam(name, score = 0) {
    switch (true) {
        case (score >= 90) && score <=100:
            console.log(`${name}: Excellent`)
            break
        case (score >= 75) && score <=89:
            console.log("name: Very Good")
            break
        case (score >= 60) && score <=89:
            console.log("name: Good")
            break
        case(score >= 50) && score <=59:
            console.log("name: Passed")
            break
        case(score >= 0) && score <=49:
            console.log("name: Failed")
            break
    }
}

checkExam(name,)
checkExam(name, 94)
checkExam(name, 82)
checkExam(name, 64)
checkExam(name, 52)
checkExam(name, 42)