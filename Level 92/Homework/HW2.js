let age = 20;
let isStudent = true;

age < 18 ? console.log("Minor") : age >= 18 && !isStudent ? console.log("Adult Student") : age >= 18 && isStudent === false ? console.log("Adult") : age <= 65 ? console.log("senior"): console.log("unknown")