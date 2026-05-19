//employee assignment
const employees=[
    {eno:101,name:"ravi",marks:[78,82,91]},
    {eno:102,name:"bhanu",marks:[65,70,68]},
    {eno:103,name:"sneha",marks:[88,92,95]},
    {eno:104,name:"kiran",marks:[55,60,58]},
    {eno:105,name:"anitha",marks:[90,85,87]},
];
employees.splice(1,0,{eno:201,name:"cherry",marks:[85,95,75]},)
console.log(employees)
employees.splice(4,1)
console.log(employees)
employees.splice(3,1,{eno:103,name:"sneha",marks:[88,92,75]},)
console.log(employees)



