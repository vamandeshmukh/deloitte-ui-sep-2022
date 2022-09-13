

console.log(`Start`);

class Employee {

    // feilds, methods, constructor  
    eid;
    firstName;
    salary;

    constructor(eid, firstName, salary) {
        this.eid = eid;
        this.firstName = firstName;
        this.salary = salary;
    }

    works = () => {
        console.log(`Employee with firstName ${this.firstName} works...`);
    }
    static works2 = () => {
        console.log(`Employee with firstName ${this.firstName} works 2...`);
    }
}

// Employee emp = new Employee(); // Java 
const emp = new Employee(); // JavaScript 
emp.firstName = `Sonu`;
emp.works();
const emp2 = new Employee(102, `Monu`, 10.5);
emp2.works();
// emp2.works2();
Employee.works2();
