
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateHTML = require('./utils/generateMarkdown');

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
        type: 'select',
        name: 'license',
        message: 'Choose a license.',
        choices: [
            { title: 'Apache 2.0 License' },
            { title: 'Boost Software License 1.0' },
            { title: 'BSD 3-Claurse License' },
            { title: 'BSD 2-Clause License' },
            { title: 'Creative Commons: CC0' },
            { title: 'GNU GPL v3' },
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



// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(path.join(process.cwd(), fileName), data)
};

// function to initialize program
function init() {
    inquirer
    .prompt (questions)
    .then((data) => {
        writeToFile("README.md", generateHTML({...data}))
    }).catch((err) => {
        console.log(err);
    })
}

// function call to initialize program
init();
