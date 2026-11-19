let company = {
    name: "TechVision",
    address: "Tbilisi",
    employees: [
        {
            fullName: "Giorgi",
            position: "Developer",
            details: [25, 3000, "Frontend"]
        },
        {
            fullName: "Nika",
            position: "Designer",
            detailss: [23, 2500, "UI/UX"]
        },
        {
            fullName: "Ana",
            position: "Manager",
            details: [28, 4000, "Management"]
        }
    ],
    departments: ["Development", "Design", "Management"]
}


let {name, address, employees} = company
let [one, two, three] = employees
let {fullName:lolkek, position:lolkuk, details: detal} = one
let [age, money, s] = detal
let {fullName: names, position: possi, detailss: detalsss} = two
let [ages, moneys, ss] = detalsss

console.log(one, detal)
console.log(two, detalsss)

if(money > moneys){
    console.log(lolkek)
}else if(money < moneys){
    console.log(names)
}

if(money > 3000){
    console.log(lolkek, "High Salary")
}else if(moneys > 3000){
    console.log(names, "High Salary")
}