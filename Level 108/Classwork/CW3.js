const rawEnergies = [5, 45, 120, 200, 12, 88, -10, 150]

let energy = rawEnergies.filter(item => item > 10 && item < 150)
let kvanturikoepicienti = energy.map(item => item * 3 && item - 5)

kvanturikoepicienti.forEach(element => {
    console.log(`Q-${element}`)
});