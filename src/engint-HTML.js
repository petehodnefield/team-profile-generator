const fs = require('fs')
const writeFile = require("../src/generate-site")
// const generateManager = require('./manager-HTML')
const totalInfo = []


const generateManager = function(name, id, email, role, officeNumber) {
    const managerInformation = `
    <div class="container">
    <h2>${name}</h2>
    <h3>${role}</h3>
    <h3>Employee ID: ${id}</h3>
    <h3>Email Address: <a href="mailto:${email}">${email}</a></h3>
    <h3>Office Number:${officeNumber}</h3>
    </div>
    `
    totalInfo.push(managerInformation)
}
const generateEngineer = function(name, id, email, role, github) {
    const engineerInformation = `
    <div class="container">
    <h2>${name}</h2>
    <h3>${role}</h3>
    <h3>Employee ID: ${id}</h3>
    <h3>Email Address: <a href="mailto:${email}">${email}</a></h3>
    <h3>GitHub: <a href="https://github.com/${github}">https://github.com/${github}</a></h3>
    </div>
    `
    totalInfo.push(engineerInformation)
}

const generateIntern = function(name, id, email, role, school) {
    const internInformation = `
    <div class="container">
    <h2>${name}</h2>
    <h3>${role}</h3>
    <h3>Employee ID: ${id}</h3>
    <h3>Email Address: <a href="mailto:${email}">${email}</a></h3>
    <h3>School: ${school}</h3>
    </div>
    `
    totalInfo.push(internInformation)
}

const putItAllTogether = function(yaya) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie-edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="../src/styles.css">
    </head>

    <body>
    <h1>Employee List</h1>
    ${yaya}
    </body>
    `
}

const engintHTML = function(memberInfo) {
    const information = memberInfo.forEach(element => {
        name = element.name
        id = element.id
        email = element.email
        role = element.role
        if(role === "Engineer") {
            github = element.github
            generateEngineer(name, id, email, role, github)

        }
        else if(role === "Manager") {
            officeNumber = element.officeNumber
            generateManager(name, id, email, role, officeNumber)
        }
        else if(role === "Intern") {
            school = element.school
            generateIntern(name, id, email, role, school)
        }
    })
    console.log(totalInfo)
    const totalInfoJoined = totalInfo.join(" ")

    writeFile(putItAllTogether(totalInfoJoined))
}




module.exports = engintHTML