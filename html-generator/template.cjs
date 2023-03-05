

// function buildEmployees(employees) {

//     const buildManager = manager => {
//       return `
//       <div class="card" style="width: 18rem;">
//       <div class="card-header">
//        Manager
//       </div>
//       <ul class="list-group list-group-flush">
//         <li class="list-group-item">ID: </li>
//         <li class="list-group-item">Office Number: ${manager.getOffice()}</li>
//         <li class="list-group-item"></li>
//       </ul>
//     </div> `
//     }

//     const employeeArr = [];
//     employeeArr.push(employees.filter(employee => employee.getRole() === 'Manager'))
//     map(x => buildManager(x))
//     console.log("Employees:",employeeArr)
//     console.log("Employees 2:",employeeArr.join(""))
//     return employeeArr.join("")

// }

function buildEmployees(employees) {
    const buildManager = manager => {
        return `
        <div class="card mx-4" style="width: 18rem;">
        <div class="card-header">
        Manager
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Name: ${manager.name}</li>
        <li class="list-group-item">ID: ${manager.id} </li>
        
        <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
        </div> `
    };


    const buildEngineer = engineer => {
            return `
            <div class="card mx-4" style="width: 18rem;">
            <div class="card-header">
            Engineer
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${engineer.name}</li>
            <li class="list-group-item">ID: ${engineer.id} </li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item">GitHub: ${engineer.github} </li>
            </ul>
            </div> `
        };


        const buildIntern = intern => {
            return `
            <div class="card mx-4" style="width: 18rem;">
            <div class="card-header">
            Intern
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${intern.name}</li>
            <li class="list-group-item">ID: ${intern.id} </li>
            <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item">School: ${intern.school} </li>
            </ul>
            </div> `
        };

    

    // const employeeArr = employees
        
    //     .filter(employee => employee.getRole() === 'Manager')
    //     .map(x => buildManager(x))
    //     .join(""); 


        



    // console.log("Employees:", employeeArr);
    // return employeeArr;


    return employees.map(employee => {
        if (employee.getRole() === 'Manager') {
            return buildManager(employee);
        } else if (employee.getRole() === 'Engineer') {
            return buildEngineer(employee);
        } else if (employee.getRole() === 'Intern') {
            return buildIntern(employee);
        }
    }).join("");
}




const htmlTemp = (team) => {
  return `
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>
  <body>
      <div class="container-fluid">
          <div class="row">
              <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                  <h1 class="text-center text-white">My Team</h1>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="row">
              <div class="row team-area col-12 d-flex justify-content-center">
                  ${buildEmployees(team)}
              </div>
          </div>
      </div>
  </body>
  </html>;
  `
}


module.exports = htmlTemp;