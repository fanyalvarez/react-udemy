//promesas
import { getHeroeById, getHeroesByOwner } from "./bases/09_forms-export";


// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {

//         const heroeData = getHeroeById(2)
//         resolve(heroeData)
//         // console.log(heroe);

//         // reject("no se encontro el heroe")
//     }, 2000);

// })

// promesa.then((heroe) => {
//     console.log('heroe', heroe);
// })
//     .catch(err => console.warn(err))


const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const heroeData = getHeroeById(id)

            if (heroeData) {
                resolve(heroeData)
            } else {
                reject("no se encontro el heroe")
            }
        }, 2000);
    })
}

getHeroeByIdAsync(1)
    // .then(heroe => console.log('heroe', heroe))
    // .catch(err => console.warn(err))
    .then(console.log)
    .catch(console.warn)