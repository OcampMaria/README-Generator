// fs is Node standard library package for reading and writing files
const fs = require('fs');
// we install it from npm package. code that prompts the questions 
const inquirer = require('inquirer');
const markdown = require ('./utils/generateMarkdown');
// operating systems(functions)built from node. we used path.join
const path = require('path')


// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the Repo?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project(what is the project, technologies used, challenges, future features to implement)',
    },
  
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? (Provide a step-by-step description of how to get the development environment running)',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
    },
    {
        type: 'input',
        name: 'deployed',
        message: 'What is the link to your deployed application?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
    },
    {
        type: 'input',
        name: 'badges',
        message: 'List any badges',
    },
    {
        type: 'input',
        name: 'features',
        message: 'List the features of your project here',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Add guidelines for how to contribute to this project',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Add any tests necessary for your application',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter your Github & link to your profile, email, and comments for more info on where to be contacted ',
    },
    
];

// function to write README file
function writeToFile(fileName, data) {
    // process.cwd-build direction out similar like in the terminal.location of the file. 
   return fs.writeFileSync(path.join(process.cwd(), fileName), data)
   
}



// function to initialize program
function init() {
    // inquirer asks questions
    // prompt(questions)- all questions from questions array
    inquirer.prompt(questions).then(responseAnswers => {
        // function gets us what we want 
        const responseMarkdown = markdown(responseAnswers)
        writeToFile('README.md', responseMarkdown)
    });
}

// function call to initialize program
init();

