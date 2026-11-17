let compan = {
    name: "TechVision",
    employees: 45,
    income: 120000,
    expenses: 75000,
    founded: 2018,
    country: "Georgia",
    isActive: true
};
let {name : companyName, employees : employeeCount, income : totalIncome, expenses : totalExpenses, founded : foundationYear, country : nation, isActive : activity} = compan
console.log('profit:', totalIncome - totalExpenses)
console.log(totalIncome - totalExpenses > 500000 ? 'good profit' : 'bad profit')
console.log(foundationYear < 2020 ? 'old company' : 'new company')
console.log(activity ? 'active' : 'inactive')
console.log('income and expense:', totalIncome, totalExpenses)