const Choices = require("inquirer/lib/objects/choices");
const Employee = require(`./Employee`);

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    returnOfficeNumber() {
        return this.officeNumber;
    }

    returnRole() {
        return 'Manager'
    }
}

module.exports = Manager;