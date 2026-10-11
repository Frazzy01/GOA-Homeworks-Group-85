let list = [0, "გამარჯობა", "", null, undefined, "JS", false]
let falsy = list.filter(name => !name)

console.log(falsy)