const inquirer = require("inquirer")

class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
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
        this.role = 'Employee'
        console.log(this.role)
        return 'Employee'
    }
}

module.exports = Employee