const Choices = require("inquirer/lib/objects/choices");
const Employee = require(`./Employee`);

class Engineer extends Employee {
    constructor (name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }

    returnOfficeNumber() {
        return this.gitHub;
    }

    returnRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;