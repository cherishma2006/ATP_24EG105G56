/*ASSIGNMENT 3:
Employee Payroll Processor
You are building a salary processing module in a company HR app.*/


const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];


   // 1. filter() employees from IT department
   const empIt=employees.filter((employees)=>employees.department==="IT")
console.log(empIt)
   // 2. map() to add:  netSalary = salary + 10% bonus
const netSalary=employees.map((employee)=>{
    let bonus=employee.salary*0.10;
    return {
        ...employee,
        netSalary:employee.salary+bonus
    };
    
})
   
console.log(netSalary)
    //3. reduce() to calculate total salary payout
    const totalSalary=employees.reduce((total,employee)=>{
         return total+employee.marks;
  },0)/employees.length;
    console.log(totalSalary)

    //4. find() employee with salary 30000
    const salary30000=employees.find((employee)=>employee.salary===30000)
    console.log(salary30000)
    //5. findIndex() of employee "Neha"
const empNeha=employees.findIndex((employee)=>employee.name==="Neha")
console.log(empNeha)