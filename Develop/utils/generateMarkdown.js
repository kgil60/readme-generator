// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) {
    return "";
  }

  if(license.includes(" ")) {
    let linkLicense = license.split(" ");
    linkLicense = linkLicense.join("%20");
    return `https://img.shields.io/badge/license-${linkLicense}-blue`;
  }

  return `https://img.shields.io/badge/license-${license}-blue`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license) {
    return "";
  }

  if(license.includes(" ")) {
    let linkLicense = license.split(" ");
    linkLicense[0] = linkLicense[0].toLowerCase();
    linkLicense = linkLicense.join("-");
    
    return `https://choosealicense.com/licenses/${linkLicense}`;
  } else {
    return `https://choosealicense.com/licenses/${license.toLowerCase()}`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return "";
  }

  return `[![license](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ${renderLicenseSection(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Test Instructions](#test-instructions)
  - [License](#license)
  - [Questions](#questions)

  ## Installation

  ${data.installationInstructions}

  ## Usage

  ${data.usageInfo}

  ## Contribution Guidelines

  ${data.contribution}

  ## Test Instructions

  ${data.tests}

  ## License

  This application is protected under ${data.license}. Learn more [here.](${renderLicenseLink(data.license)})

  ## Questions

  Any questions? Contact me using these links:

  - [GitHub](https://github.com/${data.github})
  - [Email](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
