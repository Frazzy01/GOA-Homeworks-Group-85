let secret = 20

function numberGame(secret) {
    let guess = 1
    let missed = 0
    while (guess <= secret) {

        if (guess < secret) {
            guess++
            missed++
        } else if (guess === secret) {
            console.log("You found it!")
            break
        }

    }

    console.log(missed)

}

numberGame(secret)
