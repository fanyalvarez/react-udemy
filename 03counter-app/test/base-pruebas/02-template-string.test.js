import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('pruebas en archivo 02', () => { 
    test('return getSaludo retorna "hola nombre"', () => { 
        
        const name = 'fer'
        const message =getSaludo(name)

        expect(message).toBe(`Hola ${name}`)
     })
 })