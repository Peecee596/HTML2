//json object
var employees={
    "firstname":"Poonam",
    "lname":"Chauhan",
    "Designation":"OM",
    "Salary":5000
}
console.log(`My name is ${employees.firstname} ${employees.lname}`);
console.log(`My Designation is ${employees.Designation} and salary i get every month is ${employees.Salary}`);

//json arrays
var people=[
    {"firstname":"Poonam","lname":"Chauhan","Designation":"OM","Salary":5000},
    {"firstname":"shivam","lname":"Chauhan","Designation":"OM","Salary":5000}
];
people.forEach(function(people){
    console.log(`${people.firstname} and ${people.lname} and ${people.Designation}`);
});

    