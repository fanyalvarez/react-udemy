import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('pruebas 05', () => {

    test('should return a object', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser()
        // console.log(user);
        expect(testUser).toStrictEqual(user)
    })

    test('should return a object homework', () => {
        const name = 'Fer'
        const user = getUsuarioActivo(name) 

        expect(user)
            .toEqual({
                uid: 'ABC567',
                username: name
            })

    })
})