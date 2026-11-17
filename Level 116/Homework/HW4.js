let students = [
    ["Goga", 19, [90, 85, 95]],
    ["Nika", 20, [75, 88, 80]],
    ["Saba", 18, [100, 95, 90]]
];


let [[Goga, gogaage, [gogascore, gogascore2, gogascore3]], [Nika, Nikaage, [Nikascore, Nikascore2, Nikascore3]], [Saba, Sabaage, [Sabascore, Sabascore2, Sabascore3]]] = students

console.log(goga, gogaage, gogascore, gogascore2, gogascore3)
console.log(nika, Nikaage, Nikascore, Nikascore2, Nikascore3)
console.log(Saba, Sabaage, Sabascore, Sabascore2, Sabascore3)


let [[Gogaa, gogaaage, [, , ]], [Nikaa, Nikaaage, [, , ]], [Ssaba, Sabaaage, [, , ]]] = students

console.log(Gogaa, gogaaage)
console.log(Nikaa, Nikaaage)
console.log(Ssaba, Sabaaage)

let [[, , [gogaascore, , gogaascore3]], [, , [Nikaascore, , Nikaascore3]], [, , [Sabaascore, , Sabaascore3]]] = students

console.log(gogaascore, gogaascore3)
console.log(Nikaascore, Nikaascore3)
console.log(Sabaascore, Sabaascore3)

let goganum = [gogascore, gogascore2, gogascore3]

let gogasum = goganum.reduce((total, current) => total + current, 0)
console.log(gogasum)