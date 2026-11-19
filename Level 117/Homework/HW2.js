let character = {
    username: "Shadow",
    level: 15,
    stats: [100, 80, 45],
    weapons: ["Sword", "Bow", "Dagger"]
}

let {username, level, stats, weapons} = character
let [one, two, three] = stats
let [first, second,] = weapons

console.log(character)

if(one < 50){
    console.log("Low Health!")
}else{
    console.log("Character is Ready!")
}