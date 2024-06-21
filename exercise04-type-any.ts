let randomValue: any = 10;
randomValue = 'Mateo';   // OK
randomValue = true;      // OK

console.log('RandomValue: ' + randomValue.name);  // Logs "undefined" to the console
// randomValue();                  // Returns "randomValue is not a function" error
// randomValue.toUpperCase();      // Returns "randomValue is not a function" error

let randomValueTwo: unknown = 10;
randomValueTwo = 'Mateo';   // OK
randomValueTwo = true;      // OK

console.log('RandomValueTwo: ' + randomValueTwo);  // Error: Object is of type unknown
// console.log(randomValueTwo.name);  // Error: Object is of type unknown
// randomValueTwo();                  // Error: Object is of type unknown
// randomValueTwo.toUpperCase();      // Error: Object is of type unknown
