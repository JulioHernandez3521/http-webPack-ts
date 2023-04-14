// // import { Hero as SuperHero, Hero1 } from './classes/Hero';
// import * as HeroClasses from './classes/Hero';
define(["require", "exports", "../classes/Hero"], function (require, exports, Hero_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const hero = new Hero_1.Hero("Juan", 1, 21);
    console.log(hero.power);
});
