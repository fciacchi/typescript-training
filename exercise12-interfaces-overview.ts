interface EmployeeInterface {
    firstName: string;
    lastName: string;
    fullName(): string;
    age?: number;
}

const employee: EmployeeInterface = {
    firstName : "Emil",
    lastName: "Andersson",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    },
    age: 31,
}

//* Error - Type 'number' is not assignable to type 'string'
// employee.firstName = 10;  

type EmployeeType = {
    firstName: string;
    lastName: string;
    fullName(): string;
}

const secondEmployee: EmployeeType = {
    firstName: 'John',
    lastName: 'Smith',
    fullName() {
        return this.firstName + " " + this.lastName
    },
    // age: 31,
}

console.log(employee);
console.log(secondEmployee);