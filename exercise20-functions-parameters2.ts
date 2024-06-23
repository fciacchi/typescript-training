let addThreeNumbers = (x: number, y: number, z: number): number => x + y + z;

// Error: only 2 params
// console.log(addThreeNumbers(12, 54));
// Error: too many params
// console.log(addThreeNumbers(12, 54, 21, 43));

let addThreeNumbers2 = (x: number, y: number, z?: number): number => {
    if((z === undefined)) {
        return x + y;
    } else {
        return x + y + z;
    }
};

// Can accept 2 params
console.log(addThreeNumbers2(12, 54));

let subtractThreeNumbers = (x: number, y: number, z = 100): number => x - y - z;

// returns -110 because 'z' has been assigned the value 100
console.log(subtractThreeNumbers(10, 20));
// returns -25
console.log(subtractThreeNumbers(10, 20, 15));