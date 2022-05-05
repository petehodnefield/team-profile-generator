const fs = require('fs')

const generateEngineer = function(name, id, email, github) {
    const engineerInformation = `
<div>
<h1>${name}</h1>
<h1>${id}</h1>
<h1>${email}</h1>
<h1>${github}</h1>
</div>
`
    console.log(engineerInformation)
}
const generateIntern = function(name, id, email, school) {
    const internInformation = `
<div>
<h1>${name}</h1>
<h1>${id}</h1>
<h1>${email}</h1>
<h1>${school}</h1>
</div>
`
    console.log(internInformation)
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
        else if(role === "Intern") {
            school = element.school
            generateIntern(name, id, email, role, school)
        }
    })



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

        </header>
    </body>

    `
}




module.exports = engintHTML