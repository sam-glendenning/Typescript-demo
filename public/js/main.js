/**
 * Student class
 */
var Student = /** @class */ (function () {
    /**
    * @param {string} firstName - the student's first name
    * @param {string} middleInitial - the student's initial
    * @param {string} lastName - the student's last name
    */
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
export { Student };
/**
 * Greets the user
 * @param {Person} person - a Student object
 * @return {string} - The personalised greeting
 */
export function greeter(person) {
    return "Hello " + person.firstName + " " + person.middleInitial + " " + person.lastName;
}
var user = new Student("Sam", "A.", "Glendenning");
document.body.textContent = greeter(user);
