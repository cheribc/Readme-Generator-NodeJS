const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require();

// Inquirer Questions to prompt user for details of desired README
inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What does your application do?"
    },
    {
        type: "input",
        name: "installation",
        message: "How is your application installed?"
    },
    {
        type: "input",
        name: "usage",
        message: "What types of users would find your application helpful?"
    },
    {
        type: "input",
        name: "contributions",
        message: "What are the contribution guidelines?"
    },
    {
        type: "input",
        name: "testing",
        message: "How do users test the application?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "url",
        message: "What is the URL to your project?"
    },
    {
        type: "checkbox",
        name: "license",
        message: "What is your email address?"
        choices: [
            "MIT",
            "Apache 2.0",
            "BSD",
            "MPL",
            "GPL",
            "Copyleft",
            "GNU",
            "Artistic License",
            "MS-PL",
            "EPL",
            "CDDL",
            "AGPL",
            "ISC",
            "MS-RL",
            "CCO"]
    },
    {
        type: "input",
        name: "questions",
        message: "Contact me for any questions about this application?",
    },

]);

// Function to generate README
function writeToFile(filename, data) {}