import powers, { Power } from "../data/powers";

export class Hero {
    constructor(
        public name:string,
        public powerId: number,
        public age: number
    ){}

    get power():string {
        return powers.find(power => power.id === this.powerId)?.descr || "Not Found";
        // ! significa que simpre tendra un valor
    }
}

export class Hero1 {}
export class Hero2 {}
export class Hero3 {}


export const minombre=  "Julio";
export const pi = 3.1416;
// module.exports ={
//     Hero
// }