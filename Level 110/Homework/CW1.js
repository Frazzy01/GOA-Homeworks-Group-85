let company = {
    name: "TechVision",
    founded: 2010,

    headquarters: {
        country: "Georgia",
        city: "Tbilisi",

        address: {
            street: "Chavchavadze",
            building: {
                number: 25,
                floors: 8,

                departments: {
                    firstFloor: {
                        name: "Reception",
                        employees: 4
                    },

                    fifthFloor: {
                        name: "Development",
                        employees: 35,

                        manager: {
                            name: "Giorgi",
                            age: 32,

                            contact: {
                                email: "giorgi@techvision.com",
                                phone: "555123456"
                            }
                        }
                    }
                }
            }
        }
    },

    projects: {
        project1: {
            name: "Website",
            budget: 15000,

            team: {
                leader: "Nika",
                members: 8,

                technology: {
                    frontend: "React",
                    backend: "Node.js",
                    database: "MongoDB"
                }
            }
        },

        project2: {
            name: "Mobile App",
            budget: 25000,

            team: {
                leader: "Ana",
                members: 12,

                technology: {
                    frontend: "React Native",
                    backend: "Python",
                    database: "PostgreSQL"
                }
            }
        }
    }
}


// -------------------------------- FIRST

console.log(company.name)
console.log(company.founded)

console.log(company.headquarters.country)
console.log(company.headquarters.city)

console.log(company.headquarters.address.building.number)
console.log(company.headquarters.address.building.floors)

console.log(company.headquarters.address.building.departments.firstFloor.name)
console.log(company.headquarters.address.building.departments.firstFloor.employees)

console.log(company.headquarters.address.building.departments.fifthFloor.name)
console.log(company.headquarters.address.building.departments.fifthFloor.employees)

console.log(company.headquarters.address.building.departments.fifthFloor.manager.name)
console.log(company.headquarters.address.building.departments.fifthFloor.manager.age)

console.log(company.headquarters.address.building.departments.fifthFloor.manager.contact.email)
console.log(company.headquarters.address.building.departments.fifthFloor.manager.contact.phone)

console.log(company.projects.project1.name)
console.log(company.projects.project1.budget)
console.log(company.projects.project1.team.leader)

console.log(company.projects.project2.team.members)
console.log(company.projects.project2.name)
console.log(company.projects.project2.team.technology)


// -------------------------------- SECOND

company.name = "TechWorld"
company.headquarters.city = "Batumi"

company.headquarters.address.building.number = 40
company.headquarters.address.building.floors =  10

company.headquarters.address.building.departments.firstFloor.employees = 7
company.headquarters.address.building.departments.fifthFloor.name = "Software Development"
company.headquarters.address.building.departments.fifthFloor.manager.age = 35
company.headquarters.address.building.departments.fifthFloor.manager.contact.phone = "599123456"
company.projects.project1.budget = 20000
company.projects.project2.team.leader = "Giorgi"
company.projects.project2.team.members = 15
company.projects.project1.team.technology.frontend = "Vue.js"
company.projects.project1.team.technology.database = "MySQL"

// -------------------------------- THIRD

company.employees = 150
company.headquarters.postalCode = "0108"
company.headquarters.address.building.departments.hasElevator = true
company.headquarters.address.building.departments.firstFloor.phone = "0322000000"
company.headquarters.address.building.departments.fifthFloor.budget = 50000
company.headquarters.address.building.departments.fifthFloor.manager.salary = 6000
company.headquarters.address.building.departments.fifthFloor.manager.linkedIn = "giorgi-techvision"
company.projects.project1.team.designer = "Mariam"
company.projects.project2.team.technology.testing = "Jest"
company.projects.project2 = "In Progress"

// -------------------------------- FOURTH

delete company.founded
delete company.headquarters.country
delete company.headquarters.address.building.floors 
delete company.headquarters.address.building.departments.firstFloor.employees
delete company.headquarters.address.building.departments.fifthFloor.manager.age
delete company.headquarters.address.building.departments.fifthFloor.manager.contact.phone
delete company.projects.project1.team.technology.database
delete company.projects.project2.team.members
delete company.projects.project1.budget
delete company.projects.project1.team.technology.backend