import inquirer from "inquirer";
import Engineer from "./lib/engineer.cjs";
import Manager from "./lib/manager.cjs"
import Intern from "./lib/intern.cjs";
import path from "path";
import fs from "fs"
import htmlBody from "./html-generator/template.cjs"
const OUTPUT_DIR = path.resolve('output', './html-generator');
const outputPath = path.join(OUTPUT_DIR, "team.html");
import generateTeam from "./html-generator/template.cjs"



// // GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated



let teamArr = []

function createTeam() {
  console.log(teamArr)
    inquirer.prompt( [ 
        
    {
        type:"list",
        name: 'employeeChoices',
        message:'What type of employee would you like to add?',
        choices:['Manager', 'Engineer', 'Intern', 'None, generate team.']
    },
]).then (function (userChoice) {
      switch(userChoice.employeeChoices) {
        case 'Manager':
          managerQuestions();
          break;
        case "Engineer":
          engineerQuestions();
          break;
        case 'Intern':
          internQuestions();
          break;
         default :
          buildHtml()
            //TO-DO html generation function 
      }
})


}
 

function managerQuestions() {
    inquirer.prompt( [
        
        {
           type: "input",
           name: "managerName",
           message: "What is the manager's name?" 
        },

        {
            type: "input",
            name: "managerId",
            message: "What is the manager's employee ID number?"
        },
        {
            type:"input",
            name:"managerEmail",
            message:"What is the manager's email?"
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the manager's office number?"
        },
      ]).then(answers => {

          const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
          teamArr.push(manager);
          createTeam();
        })

}

function engineerQuestions() {
    inquirer.prompt([

        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
          },
    
          {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's employee ID number?" 
          },
    
          {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email address?"
          },
    
          {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's GitHub username?"
          }
    
        ]).then(answers => {
          const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
          teamArr.push(engineer);
          createTeam();
        });

}

function internQuestions() {
  inquirer.prompt([
    {
      type:'input',
      name: 'internName',
      message:"What is the intern's name?",
      
    },
    {
      type:"input",
      name: "internId",
      message:"What is the intern's employee ID?"
    },
    {
      type:'input',
      name:"internEmail",
      message:"What is the intern's email address?"
    },
    {
      message:"What is the intern's school?",
      name:"internSchool",
      type:"input",
    }
  ]).then(answers => {
    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
    teamArr.push(intern);
    createTeam();
  })
}


function buildHtml () {
  console.log("Team created!")
  console.log(...teamArr)
  fs.writeFileSync("./output/team.html", generateTeam(teamArr), "UTF-8")

}


createTeam()