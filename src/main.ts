/**
 * Student class
 */
export class Student {
    fullName: string;

    /**
    * @param {string} firstName - the student's first name
    * @param {string} middleInitial - the student's initial
    * @param {string} lastName - the student's last name
    */
    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string,
    ) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

export interface Person
{
    firstName: string;
    middleInitial: string;
    lastName: string;
}

/**
 * Greets the user
 * @param {Person} person - a Student object
 * @return {string} - The personalised greeting
 */
export function greeter(person : Person): string {
  return "Hello " + person.firstName + " " + person.middleInitial + " " + person.lastName;
}

const user = new Student("Sam", "A.", "Glendenning");

document.body.textContent = greeter(user);
