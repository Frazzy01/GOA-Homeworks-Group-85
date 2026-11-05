let orders = [
    { id: 101, customer: "Nika", total: 350, delivered: true },
    { id: 102, customer: "Ana", total: 120, delivered: false },
    { id: 103, customer: "Gio", total: 750, delivered: true },
    { id: 104, customer: "Mariam", total: 90, delivered: false },
    { id: 105, customer: "Luka", total: 500, delivered: true },
    { id: 106, customer: "Saba", total: 220, delivered: false }
]

let filter = orders.filter(item => item.delivered === true)
let map = orders.map(item => item.total += 50)
let index = orders.findIndex(item => item.id === 104)
let some = orders.some(item => item.total > 700)
let every = orders.every(item => item.total > 100)

orders.forEach(i => {
    console.log(`${i.id} --> ${i.customer}`)  
})