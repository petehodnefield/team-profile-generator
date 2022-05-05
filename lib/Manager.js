const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email)
        
        this.officeNumber = office
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
    getRole() {
        this.role = 'Manager'
        return 'Manager'
    }
}

module.exports = Manager