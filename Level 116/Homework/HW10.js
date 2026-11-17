let compan = {
    name: "TechVision",
    employees: 45,
    income: 120000,
    expenses: 75000,
    founded: 2018,
    country: "Georgia",
    isActive: true
};
let { name: c, employees: e, income: t, expenses: ex, founded: f, country: ca, isActive: ac } = compan
console.log(totalIncome - totalExpenses)

if (t - ex > 500000) {
    console.log("VERI GOOD")
} else {
    console.log("VERI BAD BRO")
}

if (f < 2020) {
    console.log("old company")
} else {
    console.log("new company")
}

if(ac){
    console.log("active")
}else{
    console.log("no active")
}
console.log(t, ex)