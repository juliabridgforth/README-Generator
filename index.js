
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
        name: 'description'
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
        type: 'list',
        name: 'license',
        message: 'Choose a license.',
        choices: [
            "Apache",
            "MIT",
            "ISC"
        ],
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
        .prompt(questions)
        .then((data) => {
            writeFileAsync("README.md", generateMarkdown({ ...data }))
        }).catch((err) => {
            console.log(err);
        })
}
init();