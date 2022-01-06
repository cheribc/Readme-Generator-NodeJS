// Create function to generateMarkdown

function generateMarkdown(answers) {
    return `
<h1 align="center">${answers.projectTitle} </h1>

![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

## Description
${answers.description}

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
${answers.installation}

## Usage
${answers.usage}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
This application is licensed by the ${answers.license} license.

## Contributions
${answers.contributions}

## Testing
${answers.testing}

## Questions
${answers.questions}<br />
<br />
:octocat: Find me on Github: [${answers.username}](https://github.com/${answers.username})<br />
<br />
Email me with questions: ${answers.email}<br /><br />

    `;
}

module.exports = generateMarkdown;