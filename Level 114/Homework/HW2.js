let player = {
    _name: "Shadow",
    _health: 100,
    _energy: 80,
    _level: 1,
    _experience: 0,
    _isAlive: true,

    get name() {
        return this._name
    },

    set name(i) {
        if (typeof i === "string" && i.length >= 3) {
            this._name = i
        } else {
            console.log("Name must contain at least 3 characters!")
        }
    },

    get health() {
        return this._health
    },

    set health(i) {
        if (i === 0) {
            this._isAlive = false
        } else if (i > 0) {
            this._isAlive = true
        } else {
            console.log("Invalid health!")
        }
    },

    get energy() {
        return this._energy
    },

    set energy(i) {
        if (i >= 0 && i >= 100) {
            this._energy = i
        } else {
            console.log("Invalid energy!")
        }
    },

    get experience() {
        return this._experience
    },

    set experience(i) {
        let levelup = Math.round(i / 100)
        let levelupnoround = i / 100

        if (typeof i === "number") {
            this._level += levelup
            this._experience -= levelupnoround
        }
    },

    get level() {
        return this._level
    },

    get status() {
        if (this._isAlive === true && this._energy > 0) {
            return "Ready"
        } else if (this._isAlive === true && this._energy === 0) {
            return "Exhausted"
        } else if (this._isAlive === false) {
            return "Dead"
        }
    },

    set attack(i) {
        if (this._isAlive === false) {
            console.log("bro u are dead")
        } else if (typeof i === "number" && i > 0) {
            this._energy -= i
        } else if (this._energy < i) {
            console.log("Not enough energy!")
        } else {
            this._energy -= i
        }
    }
}



console.log("name:", player.name);
console.log("level:", player.level);
console.log("experience:", player.experience);
console.log("status:", player.status);
player.experience = 250;
console.log("experience:", player.experience);
console.log("level update:", player.level);
console.log("energy no attack:", player.energy);
player.attack = 30;
console.log("energy after:", player.energy);

player.attack = 60
player.health = 0;
console.log("health:", player.health);
console.log("status:", player.status);
player.attack = 10;