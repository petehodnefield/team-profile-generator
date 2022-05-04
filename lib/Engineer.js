const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        
        this.github = github
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
    getGitHub() {
        return `github: ${this.github}`
    }
    getRole() {
        this.role = 'Engineer'
        console.log(this.role)
        return 'Engineer'
    }
}

module.exports = Engineer