const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([{
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Where are you from?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'Tell us about yourself:',
            name: 'bio',
        },
        {
            type: 'input',
            message: 'What is your GitHub URL?',
            name: 'GitHub',
        },
        {
            type: 'input',
            message: 'What is your LinkedIn URL?',
            name: 'LinkedIn',
        }

    ])
    .then((response) => {
        let htmlCode = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Activity 28</title>
        </head>
        <body>
            <h2>${response.name}</h2>
            <div>${response.location}</div>
            <div>${response.bio}</div>
            <div><a href="${response.LinkedIn}">LinkedIn</a></div>
            <div><a href="${response.GitHub}">GitHub</a></div>
        </body>
        </html>`;



        fs.writeFile('activity28.html', htmlCode, err => {
            if (err) throw err;
        });
    });