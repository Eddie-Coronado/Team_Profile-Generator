const Choices = require("inquirer/lib/objects/choices");
const Employee = require(`./Employee`);

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    returnSchool() {
        return this.school;
    }

    returnRole() {
        return 'Intern'
    }
}

module.exports = Intern;