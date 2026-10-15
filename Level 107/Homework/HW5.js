const numbers = [14, 28, 35, 42, 19, 56, 63, 70, 25, 84, 91, 100, 32]

let filter = numbers.filter(item => item > 20)
let map = filter.map((item, index) => item + index)
let filternd = map.filter(item => item % 2 == 0)
let mapnd = filternd.map(item => item * 2)
let radius = mapnd.reduce((acc, curr) => {acc + curr}, 0)
let secondrad = mapnd.reduce((acc, curr) => {
    if(curr > acc){
        return curr
    }else{
        return acc
    }
}, 0)
let index = numbers.findIndex(item => item > 60)
let some = numbers.some(item => item > 200)
let every = numbers.every(item => item % 2 == 0)

mapnd.forEach(element => {
    console.log(element)  
})