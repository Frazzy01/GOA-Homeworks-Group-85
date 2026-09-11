let namejumber = ["Giorgi", "Nika", "Ana", "Luka", "Saba"]

function studentManager(students){
    students.shift()
    students.unshift("Mariam")
    students.push("Dato")
    students.splice(3, 0, "Gabrieli")

    let copy = namejumber.slice(0, 4)
    return copy
}

console.log(studentManager(namejumber))