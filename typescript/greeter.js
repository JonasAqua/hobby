var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return 'Hey there, ' + person.firstName + ' ' + person.lastName;
}
var user = new Student('Jane', 'M.', 'Doe');
var greeting = greeter(user);
console.log(greeting);
