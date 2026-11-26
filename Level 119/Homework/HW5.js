let activeUsers = ["Nika", "Ana", "Gio"];
let inactiveUsers = ["Luka", "Mariam"];
let newUsers = ["Saba", "Elene"]

let allUsers = [...activeUsers, ...inactiveUsers, ...newUsers]
let onlineUsers = [...activeUsers, ...newUsers]
let finalUsers = [...allUsers.slice(0, 2), ...inactiveUsers, ...activeUsers]

console.log(finalUsers)