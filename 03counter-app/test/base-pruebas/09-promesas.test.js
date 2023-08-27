import { exact } from "prop-types"
import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"

describe('09', () => {
    test('retunr a heroe', (done) => {


        const id = 1
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                })

                done()
            })
    })

    test('retunr a error heroe', (done) => {


        const id = 100
        getHeroeByIdAsync(id)

            .then(hero => {
                exact(hero).toBeFalsy()
                done()
            })
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe' + id)
                done()
            })
    })
})