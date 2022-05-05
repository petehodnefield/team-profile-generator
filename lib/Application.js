const fs = require('fs')
const inquirer = require("inquirer")
const Employee = require("./Employee")
const Manager = require("./Manager")
const Engineer = require("./Engineer")
const Intern = require("./Intern")
const generatePage = require("../src/page-template")
const writeFile = require("../src/generate-site")
const myTeam = []


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
            myTeam.push(this.manager)
            console.log(myTeam)
            generatePage(myTeam)
            writeFile(generatePage(myTeam))
        })       
    }
   

  
    // Application.prototype.getTeamMembers = function() {
    //     return inquirer.prompt([
    //         {
    //             type: "list",
    //             name: 'memberType',
    //             message: "Would you like to add an Engineer or Intern to your team?",
    //             choices: ['Engineer', "Intern", "No thanks"]
    //         },
    //         {
    //             type: "input",
    //             name: 'name',
    //             message: "Please enter that team member's name",
    //             when: ({memberType}) => {
    //                 if(memberType === "Engineer") {
    //                     console.log("Engineer selected")
    //                 }
    //                 else if(memberType === "Intern") {
    //                     console.log("Intern selected")
    //                 }
    //             }
    //         },
    //         {
    //             type: "input",
    //             name: 'employeeId',
    //             message: "Please enter that team member's employee ID"
    //         },
    //         {
    //             type: "input",
    //             name: 'email',
    //             message: "Please enter that team member's email address"
    //         },
    //         {
    //             type: "input",
    //             name: 'github',
    //             message: "Please enter that team member's GitHub username"
    //         },
    //         {
    //             type: 'confirm',
    //             name: 'addMemberConfirm',
    //             message: "Would you like to add members to your team?"
    //         }
    //     ])
    //     .then(memberData => {
    //         console.table(memberData)
    //     })
       
    //     // if(!memberData.members) {
    //     //     memberData.members = []
    //     // }
    //     // return inquirer.prompt([
    //     //     {
    //     //         type: 'confirm',
    //     //         name: 'addMemberConfirm',
    //     //         message: "Would you like to add members to your team? "
    //     //     }
    //     // ])
    // }
}

module.exports = Application
