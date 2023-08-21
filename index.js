
const inquirer = require('inquirer');
const fs = require("fs"); 


  inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "Write A Name For Your Project",
    },
    {
      type: "input",
      name: "description",
      message: "Write A Description For Your Project",
    },
    {
      type: "input",
      name: "installation",
      message: "List Installation Instructions",
    },
    {
      type: "input",
      name: "usage",
      message: "List usage information",
    },
    {
      type: "input",
      name: "contribution",
      message: "Please list any contribution guidelines",
    },
    {
      type: "input",
      name: "testing",
      message: "Give test instructions",
    },
    {
      type: "checkbox",
      name: "license",
      message: "Input a license",
      choices: ["MIT","Apache 2.0","Other","None"],
    },
    {
      type: "input",
      name: "github",
      message: "Enter Github Username:",
    },
    {
      type: "input",
      name: "additionalInfo",
      message: "Enter additional contact info: (email or linkedin)",
    },
  ]).then(({
    title,
    description,
    installation,
    usage,
    contribution,
    testing,
    license,
    github,
    additionalInfo,
  })=>{
    // template
    const template = `# ${title}
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Testing](#testing)
* [License](#license)
* [Github](#github)
* [Additional](#additionalInfo)
    
## Description
* ${description}

## Installation
* ${installation}

## Usage
* ${usage}

## Contribution
* ${contribution}

## Testing Instructions
* ${testing}

## License
* ${license}

## Github
* ${github}

## Additional Contact Info
* ${additionalInfo}`;

      // funtion to create 

      createNewFile(title, template);
  }
  );

  function createNewFile(fileName, data) {

    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data, (err) => {
      if(err){
        console.log(err)
      }
      console.log('Your README has been generated');
    })

  }








