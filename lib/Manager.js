const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email)
        
        this.officeNumber = office
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
    getRole() {
        this.role = 'Manager'
        console.log(this.role)
        return 'Manager'
    }
}

module.exports = Manager