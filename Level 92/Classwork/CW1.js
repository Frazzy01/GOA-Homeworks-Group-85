let name
let nameForGreeting = name || "guest"

console.log(`hello ${nameForGreeting}, how you doing?`)

/* name aris falsy anu pirveli piroba nameForGreeting-shi falsia xolo meore true magis gamo gamoitana hello guest anu 
let nameForGreeting = Name(false imitom rom rame ar gvaq shenaxuli) || "guest"(es ki true) anu piroba daymayofilda da gamoiyena
true */

let webdev = "javascript"

webdev.length === 6 ? console.log("medium length") : webdev.length > 6 ? console.log("long length") : console.log("short name")