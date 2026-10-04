let hero = Math.floor(Math.random() * 26) + 20
let monster =  Math.floor(Math.random() * 21) + 15

console.log(hero)
console.log(monster)

if(hero > monster){
    console.log("გმირმა მოიგო!")
}else if(monster > hero){
    console.log("მონსტრმა მოიგო!")
}else{
    console.log("ბრძოლა ფრედ დასრულდა!")
}

if(hero === 30){
    hero += 10
}