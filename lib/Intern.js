const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        
        this.school = school
    }
    getName() {
        return `name: ${this.name}`
    }
    getId() {
        return `id: ${this.id}`
    }
    getEmail() {
        return `email: ${this.email}`
    }
    getSchool() {

        return `${this.school}`
    }
    getRole() {
        this.role = 'Intern'
        return 'Intern'
    }
}

module.exports = Intern