const nombre   = 'Fernando';
// const apellido = 'Herrera';

// const nombreCompleto = nombre + ' ' + apellido;
// const nombreCompleto = `${ nombre } ${ apellido }`;

// console.log( nombreCompleto );

//----------no se puede hacer pruebas sobre algo que no esta exportado-------------
export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}  `);