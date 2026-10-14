const words = [
  "javascript",
  "html",
  "programming",
  "css",
  "developer",
  "react",
  "computer",
  "code",
  "algorithm"
]

let filter = words.filter(item => item.length > 5)
let map = filter.map(item => item.toUpperCase())
let filtered = map.filter(item => item.length > 8)
let radius = filtered.reduce((acc, curr) => {}, 0)
let index = words.findIndex(item => item.length > 8)
let some = words.some(item => item.length > 10)
let every = words.every(item => item.length >= 3)

filtered.forEach(element => {
    console.log(element)
});