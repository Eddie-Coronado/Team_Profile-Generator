const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


const addTeamMembers = [];

// this function will start the program by usinf the create manager function
function initAPP() {
    createManager();
}

// This will start the prompt using inquirer and will create your Manager
function createManager() {
    console.log('Begin building your team');
    inquirer.prompt ([
        {
            name: 'managerName',
            type: 'input',
            message: 'Enter in the Manager name'
        },
        {
            name: 'managerID',
            type: 'input',
            message: 'Enter in Manager ID number'
        },
        {
            name: 'managerEmail',
            type: 'input',
            message: 'Enter in the Managers email address'
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: 'Enter in your Managers office number'
        }
    ]) .then(answers => {
        const manager = new Manager (
            answers.managerName,
            answers.managerID,
            answers.managerEmail,
            answers.officeNumber,
        );
        addTeamMembers.push(manager);
        generateTeam();
    })
}

// This is the prompt and action based on selection for adding more team memebers
function generateTeam() {
    inquirer.prompt([
        {
            name: 'teamMemberAdd',
            type: 'list',
            message: 'Add additional team members',
            choices: ['Engineer', 'Intern', 'I have completed adding team members']
        }
    ]) .then (choice => {
        switch(choice.teamMemberAdd) {
        case 'Engineer':
            createEngineer();
            break;
        case 'Intern':
            createIntern();
            break;
        case 'I have completed adding team members':
            console.log(addTeamMembers);
            generateHTML();
            break;
    }
    })
}
// This is the prompt to create your Engineer
function createEngineer() {
inquirer.prompt([
    {
        name: 'engineerName',
        type: 'input',
        message: 'Enter in your Engineers name'
    },
    {
        name: 'engineerId',
        type: 'input',
        message: 'Enter in your Engineers ID'
    },
    {
        name: 'engineerEmail',
        type: 'input',
        message: 'Enter in your Engineers email address'
    },
    {
        name: 'engineerGitHub',
        type: 'input',
        message: 'Enter in your Engineers GitHub username'
    }
]) .then( answers => {
    const engineer = new Engineer (
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGitHub
    )
    addTeamMembers.push(engineer);
    generateTeam();
})
}

// This is the prompt to create your Intern
function createIntern() {
    inquirer.prompt([
        {
            name: 'internName',
            type: 'input',
            message: 'Enter in your Interns name'
        },
        {
            name: 'internId',
            type: 'input',
            message: 'Enter in your Interns ID'
        },
        {
            name: 'internEmail',
            type: 'input',
            message: 'Enter in your Interns email address'
        },
        {
            name: 'internSchool',
            type: 'input',
            message: 'Enter in your Interns school'
        }
    ]) .then( answers => {
        const intern = new Intern (
            answers.internName,
            answers.internId,
            answers.internEmail,
            answers.internSchool
        )
        addTeamMembers.push(intern);
        generateTeam();
    })
    }

//This function will create the cards based off your selection
function createTeamCards() {
    let html = '';
    for (let x = 0; x < addTeamMembers.length; x++) {
        html +=
        `
        <div class = "card-container">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">${addTeamMembers[x].name}</h3>
                <p>${addTeamMembers[x].constructor.name}</p>    
                <ul class="card-text">
                        <li class='list'>ID: s</li>
                        <li class='list'>Email: <a href="mailto:${addTeamMembers[x].email}">${addTeamMembers[x].email}</a></li>
                        <li class='list'>${uniqueInfo(addTeamMembers[x])}</li>
                    </ul>
            </div>
        </div>
        `
//This function will give you the unique info based off the title of the position the github user works by using the github link adding in the entered Username to give you the full link
        function uniqueInfo(employee) {
            if (employee.constructor.name === 'Manager') {
                return `Office #: ${employee.officeNumber}`
            } else if (employee.constructor.name === 'Engineer') {
                return `GitHub: <a href="https://github.com/${employee.gitHub}">${employee.gitHub}</a>`
            } else {
                return `School: ${employee.school}`
            }
        }
    }
    return html;
}

//This function will create the HTML file utilizing the template created by the createTeamCards function
function generateHTML() {
    let template = createTeamCards();
    let createHTML =
    `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <script src="index.js"></script>
    <title>Team Page</title>
</head>

<body>

<div>
    <h1>My Team</h1>
</div>
    <div>
    ${template}        
    </div>
</body>

</html>
    `;
    fs.writeFile('./dist/index.html' , createHTML, function (err) {
        if (err) throw err;
        console.log('Team page created sucessfully!')
    })
    }

    initAPP();

    