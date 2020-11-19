const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([{
            type: 'input',
            message: 'What is project title?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the repo link?',
            name: 'repoLink',
        },
        {
            type: 'input',
            message: 'What is the app link?',
            name: 'appLink',
        },
        {
            type: 'input',
            message: 'What is the purpose of the app?',
            name: 'purpose',
        },
        {
            type: 'input',
            message: 'How does the user use the app?',
            name: 'use',
        },
        {
            type: 'input',
            message: 'File path to screen shot:',
            name: 'ss1',
        },
        {
            type: 'input',
            message: 'File path to second screen shot:',
            name: 'ss2',
        }

    ])
    .then((response) => {
        let readMeContent = `# ${response.name} 

## Repository Link: ${response.repoLink} 
## Application LinkL ${response.appLink}

${response.purpose}

${response.use}

![](${response.ss1})

![](${response.ss1})
        `;



        fs.writeFile('README.md', readMeContent, err => {
            if (err) throw err;
        });
    });