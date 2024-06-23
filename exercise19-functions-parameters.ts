function addNumbersRequired (x: number, y: number): number {
    return x + y;
}

// Returns 3
console.log('Both params required')
console.log('1 + 2 = ' + addNumbersRequired(1, 2));
// Returns an error
// console.log(addNumbersRequired(1));

function addNumbersOptional (x: number, y?: number): number {
    if (y === undefined) {
        return x;
    } else {
        return x + y;
    }
}

// Returns 3
console.log('Second param optional')
console.log('1 + 2 = ' + addNumbersOptional(1, 2));
// Returns 1
console.log('1 = ' + addNumbersOptional(1));

function addNumbersDefault (x: number, y = 25): number {
    return x + y;
 }
 
console.log('Second param default 25')
// Returns 3
console.log('1 + 2 = ' + addNumbersDefault(1, 2));
// Returns 26
console.log('1 (+ 25) = ' + addNumbersDefault(1));

let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => {
    let total: number =  firstNumber;
    for(let counter = 0; counter < restOfNumbers.length; counter++) {
        if(isNaN(restOfNumbers[counter])){
            continue;
        }
        total += Number(restOfNumbers[counter]);
    }
    return total;
}

console.log('Rest param - number[]')
// returns 28
console.log('7! = ' + addAllNumbers(1, 2, 3, 4, 5, 6, 7));
// returns 2
console.log('2 = ' + addAllNumbers(2));
// flags error due to data type at design time, returns 5
// addAllNumbers(2, 3, "three");

interface Message {
    text: string;
    sender: string;
 }
 
 function displayMessage({text, sender}: Message) {
     console.log(`Message from ${sender}: ${text}`);
 }
 
 console.log('Deconstructed Objects');
displayMessage({
    sender: 'Christopher',
    text: 'hello, world'
});