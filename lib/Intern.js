const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        
        this.school = school
    }
    getName() {
        console.log(`name: ${this.name}`)
        return `name: ${this.name}`
    }
    getId() {
        console.log(`id: ${this.id}`)
        return `id: ${this.id}`
    }
    getEmail() {
        console.log(`email: ${this.email}`)
        return `email: ${this.email}`
    }
    getSchool() {
        return `${this.school}`
    }
    getRole() {
        this.role = 'Intern'
        console.log(this.role)
        return 'Intern'
    }
}

module.exports = Intern