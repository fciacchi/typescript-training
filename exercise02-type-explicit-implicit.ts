let x: number;   //* Explicitly declares x as a number type
let y = 1;       //* Implicitly declares y as a number type
let z;           //* Declares z without initializing it

// This assignment gives error (because it's a number)
// y = 'one';
// This one works
z = 'one';
z = 1;

console.log(z);