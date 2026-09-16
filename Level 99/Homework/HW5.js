let scores = [45, 90, 67, 32, 100, 78, 55, 88, 40, 95]

function scorejumber(scores) {
    let sum = 0
    let failedStudents = 0
    let maxScore = scores[0]
    let minScore = scores[0]
    let Excellent = []
    let morethanavaragescorecount = 0



    for (let i = 0; i < scores.length; i++) {

        sum += scores[i];

        if (scores[i] < 50) {
            failedStudents++;
        }

        if (scores[i] > maxScore) {
            maxScore = scores[i];
        }
        if (scores[i] < minScore) {
            minScore = scores[i];
        }

        switch (true) {
            case scores[i] >= 90:
                console.log("Excellent")
                break
            case scores[i] >= 70:
                console.log("Good")
                break
            case scores[i] >= 50:
                console.log("Passed")
                break
            case scores[i] < 50:
                console.log("Failed")
                break
         }
        }

        let avarage = sum / scores.length
        console.log("avarage is", avarage)

        for (let i = 0; i < scores.length; i++) {
            if (scores[i] >= 80) {
                Excellent.push(scores[i])
            }
        }

        for (let i = 0; i < scores.length; i++) {
            if (scores[i] > avarage) {
                morethanavaragescorecount++
            }
        }

        console.log("under 50", failedStudents)
        console.log("max score", maxScore)
        console.log("min score", minScore)
        console.log("only excellent", Excellent)
        console.log("more than avarge score count", morethanavaragescorecount)

        return scores

    }

    for (let i = scores.length - 1; i >= 0; i--) {
        console.log(scores[i])
    }

    console.log(scorejumber(scores))