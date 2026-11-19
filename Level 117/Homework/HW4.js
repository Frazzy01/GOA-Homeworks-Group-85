let school = {
    schoolName: "Future Academy",
    location: "Tbilisi",
    students: [
        ["Nika", 16, 90],
        ["Ana", 17, 95],
        ["Gio", 15, 75]
    ],
    subjects: ["Math", "English", "Programming"]
}


let {schoolName, location: schoollocation, students, subjects} = school
let [first, second, third] = subjects
let [one, two] = students

console.log(schoolName, schoollocation, students)

if(students[0][2] > 80){
    console.log(true)
}else{
    console.log(false)
}