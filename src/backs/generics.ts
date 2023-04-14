import { genericFunctionArrow } from "../genericos/generics";
import { Hero, Villain } from "../interfaces";


// const name:string = "Julio";

// console.log(genericFunctionArrow(3.141616).toFixed(2));
// console.log(genericFunctionArrow(name).toUpperCase());
// console.log(genericFunctionArrow( new Date()).toLocaleDateString());

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 1000
}


console.log(genericFunctionArrow<Hero>(deadpool).realName);
console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);