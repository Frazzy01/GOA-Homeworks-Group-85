let groupA = ["Nika", "Gio"];
let groupB = ["Ana", "Mariam"];
let groupC = ["Luka", "Saba"];


let allStudents = [...groupA, ...groupB, ...groupC]

allStudents.unshift("Goga")
allStudents.push("Data", "Tornike")

let bestStudents = [...allStudents.slice(0, 3), ...allStudents.slice(-2)]
console.log(bestStudents)