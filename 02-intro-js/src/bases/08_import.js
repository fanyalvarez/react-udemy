//import, export

import { heroes } from './data/heroes'; //forma 1
//forma 1

console.log(heroes);
//opcion1
const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id)
};

//opcion2
const getHeroeByIdd = (id) => heroes.find((heroe) => heroe.id === id);
console.log(getHeroeById(2));

const  getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner == owner);
console.log(getHeroesByOwner('DC'));
