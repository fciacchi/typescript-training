// type calculator = (x: number, y: number) => number;
interface Calculator {
    (x: number, y: number): number;
}

// let typedAddNumbers: calculator = (x: number, y: number): number => x + y;
let intAddNumbers: Calculator = (num1, num2) => num1 + num2;
// let typedSubNumbers: calculator = (x: number, y: number): number => x - y;
let intSubNumbers: Calculator = (num1, num2) => num1 - num2;

console.log(intAddNumbers(1, 2));
console.log(intSubNumbers(1, 2));

let doCalculation = (operation: 'add' | 'subtract'): Calculator => {
    if (operation === 'add') {
        return intAddNumbers;
    } else {
        return intSubNumbers;
    }
}

console.log(doCalculation('add')(1, 2));