//forms to import, export

// import { heroes } from './data/heroes'; //forma 1
//forma 2     import cualquierNombre from './data/heroes';    acepta cualquier nombre en la importacion porq es default
//forma 3     import heroes from './data/heroes';
//forma 4     
import {heroes,owners} from '../data/heroes';





// console.log(heroes);
//opcion1
const getHeroeByIdd = (id) => {
    return heroes.find((heroe) => heroe.id === id)
};

//opcion2
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
// console.log(getHeroeById(2));

export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner == owner);
// console.log(getHeroesByOwner('DC'));

