const fs = require('fs')
const inquirer = require("inquirer")
const Employee = require("./Employee")
const Manager = require("./Manager")
const Engineer = require("./Engineer")
const Intern = require("./Intern")
const generateManager = require("../src/manager-HTML")
const writeFile = require("../src/generate-site")
const engintHTML = require('../src/engint-HTML')
const managerStorage = []
const employeeStorage = []
const tempStorage = []


function Application() {
    Application.prototype.initializeApp = function() {
        Application.prototype.getManagerInfo()
            
    }
    Application.prototype.getManagerInfo = function() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'manager',
                message: "Please enter the name of the team manager"
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter their employee ID"
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter their email address"
            },
            {
                type: 'input',
                name: 'office',
                message: "Please enter their office number"
            },
           
        ])
        .then(({manager, id, email, office}) => {
            this.manager = new Manager(manager, id, email, office)
            this.manager.getName()
            this.manager.getId()
            this.manager.getEmail()
            this.manager.getRole()
            managerStorage.push(this.manager)
            employeeStorage.push(generateManager(managerStorage))
            Application.prototype.getTeamInfo()
        })       
    }
    Application.prototype.getTeamInfo = function() {
        return inquirer.prompt([
            {
                type: "list",
                name: 'memberType',
                message: "Would you like to add an Engineer or Intern to your team?",
                choices: ['Engineer', "Intern", "No thanks"]
            },
            {
                type: 'input',
                name: 'name',
                message: "What is that peron's name?"
            },
            {
                type: "input",
                name: 'id',
                message: "Please enter that person's employee ID",
            },
            {
                type: "input",
                name: 'email',
                message: "Please enter that person's email address",
                
            },
            {
                type: "input",
                name: 'github',
                message: "Please enter that person's GitHub username",
                when: ({memberType}) => {
                    if(memberType === "Engineer") {
                        return true
                    }
                    else {
                        return false
                    }
                }
            },
            {
                type: "input",
                name: 'school',
                message: "Please enter that person's school",
                when: ({memberType}) => {
                    if(memberType === "Intern") {
                        return true
                    }
                    else {
                        return false
                    }
                }
            },
            {
                type: 'confirm',
                name: 'addMemberConfirm',
                message: "Would you like to add members to your team?"
            }
        ])
        .then(personData => {
            // If the person is an engineer
            if(personData.memberType === "Engineer") {
                this.engineer = new Engineer(personData.name, personData.id, personData.email, personData.github)
                this.engineer.getName()
                this.engineer.getId()
                this.engineer.getEmail()
                this.engineer.getRole()
                this.engineer.getGitHub()
                tempStorage.push(this.engineer)
            }
            // If the person is an intern
            else if(personData.memberType === "Intern") {
                this.intern = new Intern(personData.name, personData.id, personData.email, personData.school)
                this.intern.getName()
                this.intern.getId()
                this.intern.getEmail()
                this.intern.getRole()
                this.intern.getSchool()
                tempStorage.push(this.intern)
            }
            // If they want to add more members, call the function again
            if(personData.addMemberConfirm) {
                return Application.prototype.getTeamInfo()
            }
            // If they don't want more people,
            else {
                // console.log(tempStorage)
                console.log(tempStorage)
                engintHTML(tempStorage)
            }
        })
    }
}

module.exports = Application
