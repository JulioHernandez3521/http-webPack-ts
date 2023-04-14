define(["require", "exports", "../genericos/generics"], function (require, exports, generics_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // const name:string = "Julio";
    // console.log(genericFunctionArrow(3.141616).toFixed(2));
    // console.log(genericFunctionArrow(name).toUpperCase());
    // console.log(genericFunctionArrow( new Date()).toLocaleDateString());
    const deadpool = {
        name: 'Deadpool',
        realName: 'Wade Winston Wilson',
        dangerLevel: 1000
    };
    console.log((0, generics_1.genericFunctionArrow)(deadpool).realName);
    console.log((0, generics_1.genericFunctionArrow)(deadpool).dangerLevel);
});
