import Car from "./exercise22-class-car";

class ElectricCar extends Car {
    // Properties unique to ElectricCar
    private _range: number;

    // Constructor
    constructor(make: string, color: string, range: number, doors = 2) {
        super(make, color, doors);
        this._range = range;
    }

    // Accessors
    get range() {
        return this._range;
    }
    set range(range) {
        this._range = range;
    }

    // Methods
    // Overrides the brake method of the Car class
    brake(): string {
        return `${this.worker()} is braking with the regenerative braking system.`
    }

    charge() {
        console.log(this.worker() + " is charging.")
    }
}

let spark = new ElectricCar('Spark Motors','silver', 124, 2);
let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
// returns the default, 2
console.log(eCar.doors);
// returns "Spark Motors is charging"
spark.charge();
console.log(spark.brake()); 