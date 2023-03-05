const Employee = require('./employee.cjs')

class Engineer extends Employee{
    constructor (name, id, email, github) {
        // Takes value from parent class and adds them to the parameteres in the extension
        super (name, id, email);
        // fills in the remaining values not supplied by the parent
        this.github = github
    }
        // returns the value of the extension parameter "github"
    getGithub() {
        return this.github
    }

    // Sends a string of the name of the role
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer