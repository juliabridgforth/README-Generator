// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})

  ## Table of Contents
  #### [Installation](#installation)
  #### [Usage](#usage)
  #### [Contributing](#contributing)
  #### [Tests](#tests)
  #### [Questions](#questions)

  ## Installation
  \n ${data.installation}

  ## Usage
  \n ${data.usage}
  \n [Demo](./Assets/demo.mov)

  ## Contributing
  \n ${data.contributing}

  ## Tests
  \n ${data.tests}

  ## License
  \n ${data.license}

  ## Questions
  If you have any questions about this repository, please reach out to me via GitHub or my email.
  \nMy GitHub username is ${data.username}
  \n My email is ${data.email}

`;
}

module.exports = generateMarkdown;
