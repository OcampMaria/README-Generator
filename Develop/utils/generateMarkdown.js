// function to generate markdown for README
// novel. written in the README. take response answers and put it into the text. 
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.name}

  ## Description
  <p>${data.description}</p>

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Deployed](#deployed)
  * [Credits](#credits)
  * [License](#license)

  ## Installation
  <p>${data.installation}</p>

  ## Usage 
  <p>${data.usage}</p>
  This is a preview of how the Web application Looks Like: 
  ![password generator demo]("relative path")

  ## Deployed Application 
  The link to the published application can be accessed on the following link: 
  (${data.deployed}).

  ## Credits
  ${data.credits}

  ## License
  Licensed under the MIT license.

  ## Badges
  ${data.badges}

  ## Features
  <p>${data.features}</p>

  ## Contributing
  <p>${data.contributing}</p>

  - - -
  Copyright &copy; 2020 Maria Ocampo. All Rights Reserved.
  

`;}

module.exports = generateMarkdown;
