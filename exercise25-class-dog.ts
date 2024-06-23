interface Dog {
    id?: number;
    name: string;
    age: number;
    description: string;
}

// async loadDog(id: number): Dog {
//     return await (await fetch('demoUrl')).json() as Dog;
// }

class DogRecord implements Dog {
    id: number;
    name: string;
    age: number;
    description: string;

    constructor({name, age, description, id = 0}: Dog) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.description = description;
    }

    save() {
        // code to save dog to database
        return true;
    }

    static load(id: number): DogRecord {
        const dog = new DogRecord({
            id: 3,
            name: 'Waffle',
            age: 4,
            description: 'Master of Cuteness!'
        });

        // code to load dog from database
        return dog;
    }
}

const testDog = DogRecord.load(3);

console.log(testDog);