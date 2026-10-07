let names = ["nika", "ana", "gio", "mariam", "luka"]

const newNames = names.map((item) => {
    return item.toUpperCase()
})

newNames.forEach(item => {
    console.log(item)
});