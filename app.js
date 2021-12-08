const inquirer = require('inquirer')
const generateMarkdown = require('./generateMarkdown')
const fs = require('fs')

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'The name of your project: '
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username: '
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a brief description of your project: '
    },
    {
        type: 'input',
        name: 'built',
        message: 'What is your project built with: '
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this project (Github username): '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is your project used for: '
    }
]

function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, err => {
        if (err) {console.log(err)}
    })
}

function start() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile('readMe.md', generateMarkdown(answers))
    })
    .catch((err) => {
        if (err) {
            console.log(err)
        }
    })

}

start()