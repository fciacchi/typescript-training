// function identity<T, U> (value: T, message: U) : T {
//     let result: T = value + value;    // Error
//     console.log(message);
//     return result
// }

type ValidTypes = number;

function validIdentity<T extends ValidTypes, U> (value: T, message: U) : ValidTypes {
    let result: ValidTypes = value + value;    // Error
    console.log(message + " / " + result);
    return result
}

let validReturnNumber = validIdentity<number, string>(100, 'Hello!');      // OK
// let validReturnString = validIdentity<string, string>('100', 'Hola!');     // Error
// let validReturnBoolean = validIdentity<boolean, string>(true, 'Bonjour!'); // Error

function getPets<T, K extends keyof T>(pet: T, key: K) {
    return pet[key];
}

let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish"}

console.log(getPets(pets1, "fish"));  // Returns 6
// console.log(getPets(pets2, "3"));     // Error
console.log(getPets(pets2, 3));     // Returns 'parrots'
