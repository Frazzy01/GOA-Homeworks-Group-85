let books = [
    { title: "Harry Potter", price: 35, pages: 320 },
    { title: "The Hobbit", price: 28, pages: 280 },
    { title: "Atomic Habits", price: 45, pages: 250 },
    { title: "The Alchemist", price: 20, pages: 190 },
    { title: "Clean Code", price: 55, pages: 450 }
]

let longBooks = []

let fourtycount = 0
let sum = 0


books.forEach(i => {
    console.log(i.title)

    if(i.price < 30){
        console.log("SALES", i.title, "-->", i.price)
    }else if(i.price > 40){
        fourtycount++
    }

    if(i.pages > 300){
        console.log("PAGES UP THAN 300", i.title, "-->", i.pages)
        longBooks.push(i)
    }

    sum = i.price

})

console.log("VERY EXPENSIVE", fourtycount)
console.log("TOTAL", sum)

console.log(longBooks)