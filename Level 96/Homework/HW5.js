let students = [
    "Giorgi",
    "Nika",
    "Saba",
    "Luka",
    "Dato",
    "Ana"
];

let position = 4;
let newName = "Goga";

if(students){
    students[position] = newName
    console.log(students)
}else{
    console.log("Invalid position")
}