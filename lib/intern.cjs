const Employee = require('./employee.cjs')

class Intern extends Employee{
    constructor (name, id, email, school) {
        // Takes value from parent class and adds them to the parameteres in the extension
        super (name, id, email);
        // fills in the remaining values not supplied by the parent
        this.school = school
    }
        // returns the value of the extension parameter "school"
    // Sends a string of the name of the role
    getRole() {
        return "Intern";
    }
}

module.exports = Intern