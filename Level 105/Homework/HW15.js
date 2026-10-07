let numbers = [5, 12, 30, 7, 21, 40, 9, 18]

const numberJumber = numbers.map((item) => {

    if (item < 10) {
        item += 10
        if (item % 2 == 0) {
            return item += 2
        } else if (item % 2 != 0) {
            return item += 1
        }
    } else if (item < 20) {
        item *= 2
        if (item % 2 == 0) {
            return item += 2
        } else if (item % 2 != 0) {
            return item += 1
        }
    } else if (item > 20) {
        item -= 5
        if (item % 2 == 0) {
            return item += 2
        } else if (item % 2 != 0) {
            return item += 1
        }
    }
})

numberJumber.forEach(item => {
    console.log(item)
})