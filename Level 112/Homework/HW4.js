let orders = [
    { id: 101, customer: "Nika", total: 250, status: "delivered" },
    { id: 102, customer: "Ana", total: 80, status: "pending" },
    { id: 103, customer: "Gio", total: 420, status: "delivered" },
    { id: 104, customer: "Mariam", total: 150, status: "cancelled" },
    { id: 105, customer: "Luka", total: 310, status: "pending" }
]

let pendingCount = 0
let avarge = 0
let sum = 0
let expensiveOrders = []

orders.forEach(i => {
    console.log(i.id, "-->", i.customer)

    if(i.status === "delivered"){
        console.log(i.customer, "-->")
    }else{
        pendingCount++
    }

    if(i.total > 200){
        console.log(i.id, "-->", i.total)
    }

    if(i.total > 200 && i.status === "delivered"){
        expensiveOrders.push(i)
    }

    sum += i.total


    avarge = sum / orders.length
})

console.log(pendingCount)
console.log(avarge)
console.log(expensiveOrders)