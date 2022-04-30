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
            type: 'list',
            name: 'badge',
            message: 'Please select the license you wish to display',
            choices: ['afl-3.0',
            'apache-2.0','artistic-2.0','bsl-1.0','bsd-2-clause','bsd-3-clause','bsd-3-clause-clear','cc','cc0-1.0','cc-by-4.0','cc-by-sa-4.0','wtfpl','ecl-2.0','epl-1.0','epl-2.0','eupl-1.1','agpl-3.0','gpl','gpl-2.0','gpl-3.0','lgpl','lgpl-2.1','lgpl-3.0','isc','lppl-1.3c','ms-pl','mit','mpl-2.0','osl-3.0','postgresql','ofl-1.1','ncsa','unlicense','zlib']
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
        }
    ])
}

questions()
.then(data => {
    console.log(data)
    const generateContent = generateMarkdown(data)
    fs.writeFileSync('./README.md', generateContent)
})


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init()

