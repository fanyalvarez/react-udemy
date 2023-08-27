import {getImagen} from '../../src/base-pruebas/11-async-await'

describe('11', () => {
    test('get a giphy', async() => {

        const resp = await getImagen()

        // console.log(url);
        // expect(typeof url).toBe('string')
        expect (resp).toBe('no se econtro la imagen')
    })
})