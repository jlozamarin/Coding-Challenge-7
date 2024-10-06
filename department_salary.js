

// Task 1
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

// Task 2
function calculateDepartmentSalary(department) {
    let totalSalary = 0;
    department.employees.forEach(employee => {
        totalSalary += calculateEmployeeSalary(employee);
     });

return totalSalary; // return the total salary for the departments

}

//Task 3
function calculateEmployeeSalary(employee) {
    let total = employee.salary; 

    if (employee.subordinates.length > 0) {
        employee.subordinates.forEach(subordinate => { 
            total += calculateEmployeeSalary(subordinate); 
        });

    }
    return total; //return the total salary for employees/subordinates
}

//Task 4
function calculateTotalCompanySalary(company) {
    let totalCompanySalary = 0;
    company.departments.forEach(department => {
        totalCompanySalary += calculateDepartmentSalary(department);
    });
    return totalCompanySalary; //returns total salary expenses for the company
}

const marketingDepartment = company.departments.find(dept => dept.departmentName === "Marketing"); //find market dept
const financeDepartment = company.departments.find(dept => dept.departmentName === "Finance"); //find finance dept

console.log("Total Marketing Department salary: $" + calculateDepartmentSalary(marketingDepartment)); //display market salary
console.log("Total Finance Department salary: $\" + calculateDepartmentSalary(financeDepartment)); //display finance salary


console.log("Total company salary: $" + calculateTotalCompanySalary(company)); //display company salary