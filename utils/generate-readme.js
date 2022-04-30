// Print data from prompts for README
function generateMarkdown(data) {
    return `# ${data.title}
![License](http://img.shields.io/badge/license-${data.badge}-green.svg)

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

<a href="https://drive.google.com/file/d/1fwUH0hWD6ggLkbhbljqM7N0pr5f13LGc/view?usp=sharing> View a demo of the app here! </a>

## Contributing 
${data.contributing}

## Tests
${data.tests}

## Questions
You can find my GitHub here: <a href="https://github.com/${data.github}" target="_blank">GitHub</a>

For any questions you can email me at: ${data.email}
`};

module.exports = generateMarkdown;