function displayAlert(message: string|number) {
    // alert('The message is ' + message);
    console.error('The message is ' + message);
}

// Calling it with String
displayAlert('All Good!');
// Calling it with Number
displayAlert(5);

function newSum(input: number[]): number {        
    let total =  0;
    for(let count = 0; count < input.length; count++) {
        if(isNaN(input[count])){
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}

// Error: it wants an array of numbers
// console.log(newSum(5));
// Error: one element is not a number
// console.log(newSum([1, 'two', 3]));
console.log('SUM = ' + [5]);