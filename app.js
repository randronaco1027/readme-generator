const inquirer = require("inquirer")


    inquirer.prompt([
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
            name: 'guidelines',
            message: 'Please provide the contribution guidelines'
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'Please provide the test instructions'
        },
        {
            type: 'checkbox',
            name: 'badge',
            message: 'Please select the badge you wish to display',
            choices: ['badge1', 'badge2', 'badge3', 'badge4']
        },
    ])
    .then(answers => {
        console.log(answers)
    })
