// Create function to generateMarkdown

function licenseBadge(data) {
const licenseType = data.license[0];
    let licenseString = ''
        if (licenseType === 'MIT') {
        licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-Yellow.svg)`
    };
        if (licenseType === 'Apache') {
        licenseString = `![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    };
    if (licenseType === 'GNU') {
        licenseString = `![License: GNU](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
    };
    return licenseString
};

function generateMarkdown(answers) {
    return `# ${data.title}
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

    
}

module.exports = generateMarkdown;