import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"


describe('07', () => { 
    test('return string and number', () => { 

        const [letter,number] = retornaArreglo()

        expect(letter).toBe('ABC')
        expect(number).toBe(123)


     })

 })