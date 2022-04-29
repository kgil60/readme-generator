// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the name of your project? (Required)',
        validator: projectInput => {
            if(projectInput) {
                return true;
            } else {
                console.log('Please enter your project name');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project (Required)',
        validator: descriptionInput => {
            if(descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: 'Enter installation instructions (Required):',
        validator: installationInput => {
            if(installationInput) {
                return true;
            } else {
                console.log("Please provide installation instructions");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'Provide any usage info:',
        validator: usageInput => {
            if(usageInput) {
                return true;
            } else {
                console.log("Please provide your project's usage info");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: "Provide your project's contribution guidelines (Required):",
        validator: contributionInput => {
            if(contributionInput) {
                return true;
            } else {
                console.log("Please provide your project's contribution guidelines");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: "Provide your project's test instructions (Required):",
        validator: testInput => {
            if(testInput) {
                return true;
            } else {
                console.log("Please provide your project's test instructions");
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project:',
        choices: ['AGPL 3.0', 'GPL 3.0', 'LGPL 3.0', 'MPL 2.0', 'Apache 2.0', 'MIT', 'BSL', 'Unlicense']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? (Required)',
        validator: githubInput => {
            if(githubInput) {
                return true;
            } else {
                console.log('Please provide your GitHub username');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email? (Required)',
        validator: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log('Please provide your email');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if(err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created successfully'
            })
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            return generateMarkdown(answers);
        })
        .then(readmeMarkdown => {
            return writeToFile('./generated/generatedREADME.md', readmeMarkdown);
        })
        .then(fileWriteResponse => {
            console.log(fileWriteResponse.message)
        })
        .catch(err => {
            console.log(err)
        })
}

// Function call to initialize app
init();

