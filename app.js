// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generate-readme");


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your README?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description for the README'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide the installation instructions'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the use of this project?'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please provide the contribution guidelines'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide the test instructions'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please provide your GitHub username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email'
        },
        {
            type: 'checkbox',
            name: 'badge',
            message: 'Please select the badge you wish to display',
            choices: ['badge1', 'badge2', 'badge3', 'badge4']
        }
    ])
}

questions()
.then(data => {
    console.log(data)
    const generateContent = generateMarkdown(data)
    fs.writeFileSync('./dist/README.md', generateContent)
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init()

