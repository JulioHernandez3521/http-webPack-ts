import { getPokemon, crearCard } from './genericos/get-pokemon';

// import { Pokemon } from "./decorator/Pokemon-class";



getPokemon(25)
    .then(pokemon => {
        console.log(pokemon.sprites.front_default)
        crearCard('contenedor', pokemon);
    })
    .catch(error => console.error(error))
    .finally(()=> console.log('Fin de la peticoion')) 

// const charmander  = new Pokemon('Charmander');
// // (Pokemon.prototype as any).customName = "Pikachu"; 

// // console.log(charmander)
// charmander.publicApi = "https://fernando-herrera.com";

// console.log(charmander)
// charmander.savePokemon(799);