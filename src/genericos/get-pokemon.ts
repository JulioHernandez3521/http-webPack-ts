import axios  from "axios";
import { Pokemon } from "../interfaces";

import Swal from 'sweetalert2'


let contenido:Element|null;
const button:Element|null = document.querySelector('.add');


export const getPokemon =async (pokemonId:number|string): Promise<Pokemon> => {

    const {data} = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    
    return data;
    
}

export const crearCard = (contenedorId: string, pokemon: Pokemon ): void  =>{

    if(!contenido){
        contenido = document.querySelector(`#${contenedorId}`);
    }

 

    const divRow = document.createElement('div');
    divRow.classList.add('col-sm-auto');
    divRow.classList.add('mt-4');
    
    const div = document.createElement('div');
    div.classList.add('card');
    div.style.background = "#212d42";
    div.style.width = "18rem";

    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

    const div2 = document.createElement('div');
    div2.classList.add('card-body');

    const h3 = document.createElement('h3');
    h3.innerText = `#${pokemon.id} ${pokemon.name}`;


    const ul = document.createElement('ul');
    ul.classList.add('list-group');

    div2.appendChild(h3);
    
    pokemon.abilities.forEach( ({ability:{name}}) =>{
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.style.background = "#2b3950";     
        li.style.color = "aliceblue";
        li.innerText = name;
        
        ul.appendChild(li);
    });
    
    div2.appendChild(ul);
    div.appendChild(img)
    div.appendChild(div2);
    divRow.appendChild(div);
    contenido?.appendChild(divRow);
    

}

button?.addEventListener('click', (e)=>{
    Swal.fire({
        title: 'What Pokemen do you need?',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        background:"#212d42",
        color:"aliceblue",
        showCancelButton: true,
        cancelButtonColor:"#171f2e",
        confirmButtonColor:"#2c3c57",
        confirmButtonText: 'Look up',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
          return getPokemon(login)
            .then(response => {
              return response
            })
            .catch(error => {
              console.log(error)
              Swal.showValidationMessage(
                `${error.code}`
              )
            })
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
            crearCard('contenedor', (result.value as Pokemon));
        }
      })
});