const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// Inquirer Questions to prompt user for details of desired README
function promptUser() {
return inquirer.prompt([
    {  
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What does your application do?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How is your application installed?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What types of users would find your application helpful?'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What are the contribution guidelines?'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'How do users test the application?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What license would you like to use for this project?',
        choices: [
            'MIT','Apache 2.0','GNU',
        ]
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Contact me for any questions about this application.'
    },
]);

}

function generateREADME(data) {
    console.log(data);
    return `
# README for ${data.title}

## Description
${data.description}

## Table of Contents
- [Title](#title)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage) 
- [Contributions](#contributions)
- [Testing](#testing)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
This application is licensed by the ${data.license} license.

## Contributions
${data.contributions}

## Testing
${data.testing}

## Questions
${data.questions}<br />
<br />
:octocat: Find me on Github: [${data.username}](https://github.com/${data.username})<br />
<br />
Email me with questions: ${data.email}<br /><br />
`;
    
}

async function init() {
    console.log("Hi! Thank you for using my README Generator.")
    try {

        const data = await promptUser();

        const md = generateREADME(data);

        const filename = data.title.toLowerCase().split(' ').join('') + ".md";

        console.log(filename);

        await writeFileAsync(filename, md);

        console.log("Your README.md is now ready");
    } catch (err) {
        console.log(err);
    }
}

init();
