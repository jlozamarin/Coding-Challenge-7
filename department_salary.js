
// Task 1: Create a Department Structure
let company = {
    departments: [
        {
            departmentName: "Marketing",
            employees: [
                {
                    name: "Jesenia Chatman",
                    salary: 95000,
                    subordinates: [
                        {
                        name: "Brianna Deaubler",
                        salary: 85000,
                        subordinates: [
                        {
                            name: "Jennifer Loza",
                            salary: 75000,
                            subordinates: []
                        }
                    ]
                }
            ]
        },
        {
                    name: "Angelica Rivera",
                    salary: 65000,
                    subordinates: []
        }
     ]
 },
 {
            departmentName: "Finance",
            employees: [
                {
                    name: "Isabella Moore",
                    salary: 90000,
                    subordinates: [
                        {
                            name: "Laura Smith",
                            salary: 80000,
                            subordinates: [
                                {
                                    name: "Nicole Rodriguez",
                                    salary: 70000,
                                    subordinates: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Chris Thomas",
                    salary: 60000,
                    subordinates: []
                }
            ]
        }
    ]
};
console.log(company);

// Task 2: Create a Recursive Function to Calculate Total Salary for a Department
function calculateDepartmentSalary(department) {
    let totalSalary = 0;
    department.employees.forEach(employee => {
        totalSalary += calculateEmployeeSalary(employee);
     });

return totalSalary; // Return the total salary for the departments

}
function calculateEmployeeSalary(employee) {
    let total = employee.salary; 

    if (employee.subordinates.length > 0) {
        employee.subordinates.forEach(subordinate => { 
            total += calculateEmployeeSalary(subordinate); 
        });

    }
    return total; //Return the total salary for employees/subordinates
}

//Task 3: Create a Function to Calculate the Total Salary for All Departments
function calculateTotalCompanySalary(company) {
    let totalCompanySalary = 0;
    company.departments.forEach(department => {
        totalCompanySalary += calculateDepartmentSalary(department);
    });
    return totalCompanySalary; //Returns total salary expenses for the company
}

let marketingDepartment = company.departments.find(dept => dept.departmentName === "Marketing"); //Find market dept
let financeDepartment = company.departments.find(dept => dept.departmentName === "Finance"); //Find finance dept

console.log("Total Marketing Department salary: $" + calculateDepartmentSalary(marketingDepartment)); //Display market salary, Output: 320000
console.log("Total Finance Department salary: $" + calculateDepartmentSalary(financeDepartment)); //Display finance salary, Output: 300000
console.log("Total company salary: $" + calculateTotalCompanySalary(company)); //Display company salary, Output: 620000