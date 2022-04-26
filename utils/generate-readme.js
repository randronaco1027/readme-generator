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

`;
}

module.exports = generateMarkdown;