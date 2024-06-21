let randomValueThree: unknown = 10;

randomValueThree = true;
randomValueThree = 'Mateo';
// randomValueThree = 1;

if (typeof randomValueThree === "string") {
    //* Returns MATEO to the console.
    console.log((randomValueThree as string).toUpperCase());
} else {
     //* Returns an error message.
    console.log("Error - A string was expected here.");
}