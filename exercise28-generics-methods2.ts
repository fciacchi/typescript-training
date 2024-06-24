type NewValidTypes = string | number;

function newIdentity<T extends NewValidTypes, U> (value: T, message: U) {   // Return type is inferred
    let result: NewValidTypes = '';
    let typeValue: string = typeof value;

    if (typeof value === 'number') {           // Is it a number?
        result = value + value;                // OK
    } else if (typeof value === 'string') {    // Is it a string?
        result = value + value;                // OK
    }

    console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);

    return result
}

let numberValue = newIdentity<number, string>(100, 'Hello');
let stringValue = newIdentity<string, string>('100', 'Hello');

console.log(numberValue);       // Returns 200
console.log(stringValue);       // Returns 100100