function printToConsole (constructor: Function) {
    console.log(constructor)
}


const printToConsoleCondicional = ( print: boolean = false) : Function => {

    if(print){
        return printToConsole;
    }else{
        return ()=>{};
    }
}

const bloquearPrototipo = function (constructor: Function) {
     Object.seal(constructor);
     Object.seal(constructor.prototype);

}


function checkValidPokemonId (){
    return function (target: any , propertyKey: string, descriptor: PropertyDescriptor){
        const originalMethod = descriptor.value;

        descriptor.value = (id:number)=>{

            if(id<1 || id > 800){
                return console.error(`EL id del pokemon debe estar entre el 1 y el 800`);
            }else{
                return originalMethod(id);
            }
        }
    }
}


function readonly  (isWritable: boolean = true): Function{

    return function(targe: any, propertyKey: string){

        const descriptor: PropertyDescriptor ={
            get(){
                console.log(this);
                return this;
            },
            set( this, val){
                Object.defineProperty(this, propertyKey, {
                    value:val,
                    writable: !isWritable,
                    enumerable: false
                })
            }
        }
        return descriptor;
    }

}




@bloquearPrototipo
@printToConsoleCondicional(false)
export class Pokemon{

    @readonly(true)
    public publicApi: string = 'https://pokeapi.co';

    constructor(
        public name:string,
    ){}

    @checkValidPokemonId()
    savePokemon(id:number){
        console.log(`Pokemon con id ${id} guardado en la DB`);
    }
}