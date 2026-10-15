const numbers = [
  18, 45, 72, 91, 34, 120, 57, 86,
  103, 64, 39, 150, 77, 98, 25, 132
]

let filter = numbers.filter(num => num > 30)
let map = filter.map((item , index) => item + index)
let filternd = map.filter(num => num % 2 == 0)
let mapnd = numbers.map(num => num % 2 === 0 ? num + 20 : num - 10)
let filterrd = mapnd.filter(num => num > 100)
let radius = filterrd.reduce((acc , curr) => { return acc + curr}, 0 )
let radiusnd = filterrd.reduce((acc , curr) => { return curr / acc}, 0 )
let radiusrd = filterrd.reduce((acc , curr) => { return curr > acc}, 0) 
let secondrad = mapnd.reduce((acc, curr) => {
    if(curr > acc){
        return curr
    }else{
        return acc
    }
}, 0)
let index = numbers.findIndex(item => item < 100 && item % 2 == 0)
let some = numbers.some(item => item > 140)
let every = numbers.every(item => item % 2 == 0 && item > 100)

filterrd.forEach((i) => {
    if(i > 200){
        console.log(i, 'more than 200', filterrd.indexOf(i))
    }
    else{
        console.log(i, 'less than 200', filterrd.indexOf(i))
    }
})

let avg = filterrd.reduce((a,c) => (a+c),0)/fil1.length