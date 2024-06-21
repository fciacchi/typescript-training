interface IceCream {
    flavor: string;
    scoops: number;
    instructions?: string;
 }

interface IceCreamArray {
    [index: number]: IceCream;
}

let myIceCreams: IceCreamArray;
myIceCreams = [
    {flavor: 'chocolate', scoops: 3}, 
    {flavor: 'vanilla', scoops: 4}, 
    {flavor: 'strawberry', scoops: 2}
];
console.log(myIceCreams);

const mySingleIceCream: IceCream = myIceCreams[1];
console.log(mySingleIceCream);