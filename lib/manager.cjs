const Employee = require('./employee.cjs')

class Manager extends Employee{
    constructor (name, id, email, officeNumber) {
        // Takes value from parent class and adds them to the parameteres in the extension
        super (name, id, email);
        // fills in the remaining values not supplied by the parent
        this.officeNumber = officeNumber
    }
    
    getRole() {
        return "Manager";
    }
        // returns the value of the extension parameter "github"
    getOffice() {
        return this.officeNumber
    }
    // Sends a string of the name of the role
    
}

module.exports = Manager
