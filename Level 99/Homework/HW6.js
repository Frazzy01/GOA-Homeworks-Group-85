let names = ["goga", "NIKA", "ana", "Giorgi", "MARIAM", "dato"]
let scores = [85, 42, 96, 67, 51, 73]

function ravijumber(names, scores) {
  let failedStudents = 0
  let excellentSum = 0
  let maxnumber = 0
  let bestStudent = ""
  let sum = 0

  for (let i = 0; i < names.length; i++) {
    let cleanName = names[i].trim()
    names[i] = cleanName[0].toUpperCase() + cleanName.slice(1).toLowerCase()

    console.log(`${names[i]} - ${scores[i]}`)

    switch (true) {
      case scores[i] >= 90:
        console.log("Excellent")
        break
      case scores[i] >= 75:
        console.log("Very Good")
        break
      case scores[i] >= 60:
        console.log("Good")
        break
      case scores[i] >= 50:
        console.log("Passed")
        break
      default:
        console.log("Failed")
        break
    }

    if (scores[i] < 50) {
      failedStudents++
    }

    if (scores[i] > 80) {
      excellentSum += scores[i]
    }

    if (scores[i] > maxnumber) {
      maxnumber = scores[i]
      bestStudent = names[i]
    }

    sum += scores[i]
  }

  let avarage = sum / scores.length
  console.log("average is", avarage)

  console.log("failed", failedStudents)
  console.log("sum of upper 80:", excellentSum)
  console.log("BEST OF THE BEST STUDENT", `${bestStudent} have ${maxnumber}`)

  return names
}

ravijumber(names, scores)

for (let i = names.length - 1; i >= 0; i--) {
  console.log(`${names[i]} - ${scores[i]}`)
}