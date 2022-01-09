// Create function to generateMarkdown

// function licenseBadge(data) {
// const licenseType = data.license[0];
//     let licenseString = ''
//         if (licenseType === 'MIT') {
//         licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-Yellow.svg)`
//     };
//         if (licenseType === 'Apache') {
//         licenseString = `![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
//     };
//     if (licenseType === 'GNU') {
//         licenseString = `![License: GNU](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
//     };
//     return licenseString
// };

// function generateMarkdown(data) {
//     return `# ${data.title}
// // <h1 align="center">${data.Title} </h1>

// ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

// ## Description
// ${data.description}

// ## Table of Contents
// - [Title](#title)
// - [Description](#description)
// - [Installation](#installation)
// - [Usage](#usage) 
// - [Contributions](#contributions)
// - [Testing](#testing)
// - [License](#license)
// - [Questions](#questions)

// ## Installation
// ${data.installation}

// ## Usage
// ${data.usage}

// ## License
// ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
// This application is licensed by the ${data.license} license.

// ## Contributions
// ${data.contributions}

// ## Testing
// ${data.testing}

// ## Questions
// ${data.questions}<br />
// <br />
// :octocat: Find me on Github: [${data.username}](https://github.com/${data.username})<br />
// <br />
// Email me with questions: ${data.email}<br /><br />

    
// }

// module.exports = generateMarkdown;