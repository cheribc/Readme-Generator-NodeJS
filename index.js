const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// generateMarkdown dependency to import README 
const {generateMarkdown} = require('./util/generateMarkdown');

// const generateMarkdown = require('./util/generateMarkdown.js');

const writeFileAsync = util.promisify(fs.writeFile);

// Inquirer Questions to prompt user for details of desired README
// function promptUser(){
// return inquirer.prompt([

const questions = () => {
    inquirer.prompt([
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
        type: 'list',
        name: 'license',
        message: 'What license would you like to use for this project?',
        choices: ['MIT','Apache 2.0','GNU'],
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Contact me for any questions about this application.',
    }
    ]}.then(answers => {
        writeToFile(answers)
        console.log('Successfully wrote to README.md!')
    }).catch((err) => console.error(err));
};

const writeToFile = answers => {
    writeFileAsync('README.md', generateMarkdown(answers))
}


// Function to generate README
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) =>
//         err ? console.log(err) : null);
// }

// Function to initialize app
// function init() {
//     inquirer.prompt(questions)
//     .then((data) => {
//         return generateMarkdown(data);
//     }).then((data) => {
//         writeToFile('README.md', data);
//     })
// };

// .then((data) => {
//     return fs.writeFileSync(path.join (process.cwd(), 'READMME.md'));
// });

// }
questions();
// Function to initialize application
init();

// Exports
module.exports = questions;