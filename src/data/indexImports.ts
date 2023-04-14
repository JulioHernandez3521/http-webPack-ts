// // import { Hero as SuperHero, Hero1 } from './classes/Hero';
// import * as HeroClasses from './classes/Hero';

// import powersNameChange, { Power } from './data/powers'; //En la export default cunado importas puedes cambiar el nombre porque es default lo qu eimporta

// const Hero = 2121;

// const hero =  new HeroClasses.Hero("Juan",312,21);

// console.log(hero)

// // console.log('Hola Mundo!X');

// console.log(powersNameChange)

import { Hero } from '../classes/Hero';
import powers from '../data/powers';


const hero =  new Hero("Juan",1,21);

console.log(hero.power)


