let dice1 = Math.floor(Math.random() * 6) +1
let dice2 = Math.floor(Math.random() * 6) +1
let total = dice1 + dice2

console.log(`first is ${dice1} and second is ${dice2}`)

if(total >= 10){
    console.log("ძალიან კარგი შედეგია!")
}else if(total >= 7 && total <= 9){
    console.log("კარგი შედეგია!")
}else{
    console.log("ცუდი შედეგია!")
}

if(dice1 === dice2){
    console.log("დუბლი!")
}