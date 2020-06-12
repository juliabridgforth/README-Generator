
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title'

    },
    {
        type: 'input',
        message: 'Enter a description.',
        name: 'decription'
    },
    {
        type: 'input',
        message: 'Enter installation instructions.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter usage infromation.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines.',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Enter test instructions.',
        name: 'tests'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license.',
        choices: [
            'Apache 2.0 License',
            'Boost Software License 1.0',
            'BSD 3-Claurse License',
            'BSD 2-Clause License',
            'Creative Commons: CC0',
            'GNU GPL v3',
        ],
        initial: 1
    },
    {
        type: 'input',
        message: 'Enter your GitHub username.',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Enter your email.',
        name: 'email'
    },


];

function init() {
    inquirer
    .prompt (questions)
    .then((data) => {
        writeFileAsync ("README.md", generateMarkdown({...data}))
    }).catch((err) =>   {
        console.log(err);
    })
}
init();