// Task 1: Create a Department Structure
// Note: This shows various employees for the Marketing and Finance Departments
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

return totalSalary; // Note: Return the total salary for the departments

}

function calculateEmployeeSalary(employee) {
    let total = employee.salary; 

    if (employee.subordinates.length > 0) {
        employee.subordinates.forEach(subordinates => {
            total += calculateEmployeeSalary(subordinate);
        });

    }
    return total; //Note: Return the total salary for employees/subordinates
}
console.log(calculateDepartmentSalary(Marketing); 
console.log(calculateDepartmentSalary(Finance); 


