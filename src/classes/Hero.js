var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "../data/powers"], function (require, exports, powers_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pi = exports.minombre = exports.Hero3 = exports.Hero2 = exports.Hero1 = exports.Hero = void 0;
    powers_1 = __importDefault(powers_1);
    class Hero {
        constructor(name, powerId, age) {
            this.name = name;
            this.powerId = powerId;
            this.age = age;
        }
        get power() {
            var _a;
            return ((_a = powers_1.default.find(power => power.id === this.powerId)) === null || _a === void 0 ? void 0 : _a.descr) || "Not Found";
            // ! significa que simpre tendra un valor
        }
    }
    exports.Hero = Hero;
    class Hero1 {
    }
    exports.Hero1 = Hero1;
    class Hero2 {
    }
    exports.Hero2 = Hero2;
    class Hero3 {
    }
    exports.Hero3 = Hero3;
    exports.minombre = "Julio";
    exports.pi = 3.1416;
});
// module.exports ={
//     Hero
// }
