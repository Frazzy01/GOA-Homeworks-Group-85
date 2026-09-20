function fivehundred() {
    let i = 1
    let count3 = 0
    let count5 = 0
    let count3AndCount5 = 0
    let notCount3AndCount5 = 0
    let maxNumberCount7 = 0

    while (i <= 500) {
        if (i % 3 == 0) {
            count3++
        }

        if (i % 5 == 0) {
            count5++
        }

        if (i % 3 == 0 && i % 5 == 0) {
            count3AndCount5++
        }

        if (i % 3 != 0 && i % 5 != 0) {
            notCount3AndCount5++
        }

        if (i % 7 == 0) {
            maxNumberCount7 = i
        }

        i++
    }

    console.log(count3)
    console.log(count5)
    console.log(count3AndCount5)
    console.log(notCount3AndCount5)
    console.log(maxNumberCount7)
}

fivehundred()