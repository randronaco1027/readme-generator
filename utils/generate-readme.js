// // TODO: Create a function that returns a license badge based on which license is passed in

// //https://efficientuser.com/2019/09/12/add-some-cool-badges-in-your-github-repo/

// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//     if (license) {
//         return true;
//     } else {
//         "Please enter a badge!"
//     }
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//     if (license) {
//         return true;
//     } else {
//         "Please enter a badge!"
//     }
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//     if (license) {
//         return true;
//     } else {
//         ""
//     }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

## User Story
AS A developer

I WANT a README generator

SO THAT I can quickly create a professional README for a new project


## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing 
${data.contributing}

## Tests
${data.tests}

## Questions
You can find my GitHub here: <a href="https://github.com/${data.github}" target="_blank">GitHub</a>

For any questions you can email me at: ${data.email}
`;
}

module.exports = generateMarkdown;