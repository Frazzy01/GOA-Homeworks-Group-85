function checkExam(name, score) {
    switch (true) {
        case (score >= 90):
            console.log("name: Excellent")
            break
        case (score >= 75):
            console.log("name: Very Good")
            break
        case (score >=60):
            console.log("name: Good")
            break
        case(score >=50):
            console.log("name: Passed")
            break
        case(score <= 49):
            console.log("name: Failed")
            break
        default:
            console.log(0)
            break
    }
}

checkExam(name,)
checkExam(name, 94)
checkExam(name, 82)
checkExam(name, 64)
checkExam(name, 52)
checkExam(name, 42)