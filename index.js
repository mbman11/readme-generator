const fs = require("fs");
const inquirer = require('inquirer');


inquirer.prompt( [
    {
      type: "input",
      name: "title",
      message: "Write A Name For Your Project",
    },
    {
      type: "input",
      name: "Description",
      message: "Write A Description For Your Project",
    },
    {
      type: "input",
      name: "Description",
      message: "Write A Description For Your Project",
    },
    {
      type: "input",
      name: "Description",
      message: "Write A Description For Your Project",
    },
    {
      type: "input",
      name: "Description",
      message: "Write A Description For Your Project",
    },
  ]
);

// write file

