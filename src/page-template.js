const fs = require('fs')
const writeFile = require("../src/generate-site")

const generatePage = function(yaya) {

    const {name, id, email, officeNumber, role} = yaya[0]
    console.log(name, id, email, officeNumber, role)
    
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
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
                <h1 class="page-title text-secondary bg-dark py-2 px-3">Employee List</h1>
                <div>
                    <h2>${name}</h2>
                    <h2>${role}</h2>
                    <h2>Employee ID: ${id}</h2>
                    <h2>Email: ${email}</h2>
                    <h2>Office Number:${officeNumber}</h2>
                </div>
                
            </div>
        </header>
    </body>
    `
}
// writeFile()


module.exports = generatePage