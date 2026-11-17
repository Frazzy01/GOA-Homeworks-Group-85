let employee = {
    firstName: "Nika",
    lastName: "Beridze",
    position: "Developer",
    salary: 3500,
    experience: 4
}

let {firstName : f, lastName : l, position : p, salary : s, experience : e} = employee


let {firstName : name} = employee

console.log(name)

let {lastName : surname} = employee

console.log(surname)

let {position : jobTitle} = employee

console.log(jobTitle)

console.log(f, l, p,)

if(e > 3){
    console.log(true)
}else{
    console.log(false)
}