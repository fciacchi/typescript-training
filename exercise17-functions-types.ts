// Normal function
function addTwoNumbers (x: number, y: number): number {
    return x + y;
}

console.log('Normal Function');
console.log('1 + 2 = ' + addTwoNumbers(1, 2));

// Anonymous function
const addNumbers1 = function (x: number, y: number): number {
    return x + y;
}

console.log('Anonymous Function');
console.log('3 + 4 = ' + addNumbers1(3, 4));
 
// Arrow function
const addNumbers2 = (x: number, y: number): number => x + y;

console.log('Arrow Function');
console.log('2 + 3 = ' + addNumbers2(2, 3));

const sum = function (input: number[]): number {
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}

console.log('Sum - Anonymous Function');
console.log('1 + 2 + 3 = ' + sum([1, 2, 3]));

let total2 = (input: number[]): number => {
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}

console.log('Sum - Arrow Function');
console.log('1 + 2 + 3 = ' + sum([1, 2, 3]));

