import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"
import heroes from "../../src/data/heroes"

describe('Pruebas en 08', () => {
    test('getHeroeById return a heroe por ID', () => {
        const id = 1
        const heroe = getHeroeById(id)
        // console.log(heroe);

        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    })

    test('getHeroeById return a undefine si no existe el id', () => {
        const id = 100
        const heroe = getHeroeById(id)
        // console.log(heroe);

        expect(heroe).toBeFalsy()
    })

    test('getHeroesByOwner heroes dc', () => {

        const dc = getHeroesByOwner('DC')
        const marvel = getHeroesByOwner('Marvel')
        console.log(dc);
        expect(dc).toEqual(
            [{ id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }])

        expect(dc).toEqual(heroes.filter( (heroe) => heroe.owner === 'DC' ))    
        expect(dc.length).toEqual(3)
        expect(marvel.length).toEqual(2)
    })
})