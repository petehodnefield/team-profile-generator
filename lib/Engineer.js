const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        
        this.github = github
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
    getGitHub() {
        return `github: ${this.github}`
    }
    getRole() {
        this.role = 'Engineer'
        return 'Engineer'
    }
}

module.exports = Engineer