const inquirer = require("inquirer")

function Employee(name, id, email) {
    this.name = name
    this.id = id
    this.email = email

    Employee.prototype.getName = function() {
        console.log(`name: ${this.name}`)
        return `name: ${this.name}`
    }
    Employee.prototype.getId = function() {
        console.log(`id: ${this.id}`)
        return `id: ${this.id}`
    }
    Employee.prototype.getEmail = function() {
        console.log(`email: ${this.email}`)
        return `email: ${this.email}`
    }
    Employee.prototype.getRole = function() {
        this.role = 'Role: Employee'
        console.log(this.role)
        return 'Employee'
    }
}

module.exports = Employee