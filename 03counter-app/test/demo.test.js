
describe('pruebas en <demo/>', () => {
    test('esat prueba no debe de fallar', () => {
        // 1 Arrange - Arreglar--inicializacion
        const message1 = 'hola mundo'

        // 2 Act - Actuar—-estimulo
        const message2 = message1.trim()

        // 3 Assert - Afirmar—- observar los resultados... esperados
        expect(message1).toBe(message2)
    })
})