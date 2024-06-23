import Vehicle from "./exercise24-class-interface";

class Car implements Vehicle {
    // Properties
    private static numberOfCars: number = 0;  // New static property
    private _make: string;
    private _color: string;
    private _doors: number;

    // Constructor
    constructor(make: string, color: string, doors = 4) {
        this._make = make;
        this._color = color;
        if ((doors % 2) === 0) {
            this._doors = doors;
        } else {
            throw new Error('Doors must be an even number');
        }
        // Increments the value of the static property
        Car.numberOfCars++;
    }

    // Accessors
    get make() {
        return this._make;
    }

    set make(make) {
        this._make = make;
    }

    get color() {
        return 'The color of the car is ' + this._color;
    }
    set color(color) {
        this._color = color;
    }

    get doors() {
        return this._doors;
    }

    set doors(doors) {
        if ((doors % 2) === 0) {
            this._doors = doors;
        } else {
            throw new Error('Doors must be an even number');
        }
    }

    // Methods
    accelerate(speed: number): string {
        return `${this.worker()} is accelerating to ${speed} MPH.`
    }

    brake(): string {
        return `${this.worker()} is braking with the standard braking system.`
    }

    turn(direction: 'left' | 'right'): string {
        return `${this.worker()} is turning ${direction}`;
    }

    public static getNumberOfCars(): number {
        return Car.numberOfCars;
    }

    // This function performs work for the other method functions
    protected worker(): string {
        return this._make;
    }
}

// Instantiates the Car object with all parameters
let myCar1 = new Car('Cool Car Company', 'blue', 2);

console.log(myCar1.color);
// console.log(myCar1._color);

// let myCar2 = new Car('Galaxy Motors', 'red', 3);
// console.log(myCar2.color);

let myCar3 = new Car('Galaxy Motors', 'gray');
console.log(myCar3.doors);  // returns 4, the default value

console.log(myCar1.accelerate(35));
console.log(myCar1.brake());
console.log(myCar1.turn('right'));

console.log(Car.getNumberOfCars());
export default Car;